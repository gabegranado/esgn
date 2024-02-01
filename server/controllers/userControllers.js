import express from "express";
import mongoose from "mongoose";

import User from "../model/userModel.js";

const router = express.Router();

export const loginUser = async (req, res) => {
    try {
    const { identifier, password } = req.body;
    const user = await User.find(
        { $or: [{username: identifier}, {email: identifier}] }
        ).exec();
        console.log(user[0].password, password);

    if (!user.length) {
        res.status(400).json({error: "not valid username/email"});
    } else {
        bcrypt.compare(password, user[0].password, function(err, result) {
            if (err){
               res.status(400).json({ message: err });
              }
              if (result) {
                const jwtToken = jwt.sign(
                    { username: user[0].username, email: user[0].email },
                    process.env.JWT_KEY
                );
                console.log("success, user loged in");
                res.status(200).json({ success: true, message: "Success, user logged in", token: jwtToken, username: user[0].username });

              } else {
                console.log("passwords do not match");
                res.status(400).json({success: false, message: 'passwords do not match'});
              }
          });
    }
    } catch (error) {
        console.log("error loginUser ", error.message);
        res.status(400).json({ message: error.message });
    }
}

export default router;