import { useState } from "react";
import { signupFields } from "../../constants/signin-up/FormFields";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import FormAction from "./FormAction";
import Input from "./Input";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const signIn = useSignIn();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", signupState["email-address"]);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async (e) => {
    try {
      const response = await axios
        .post("http://localhost:4000/users", {username: signupState.username, email: signupState["email-address"], password: signupState.password})
        .then((data) => {
          if (data.status === 201) {
            signIn({
              token: data.data.token,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { identifier: data.data.username },
            });
            // dispatch(getPosts(data.data.username));
            // browserHistory.push("UserAccount");
            // navigate(`/UserAccount/${data.data.username}`);
            navigate('/home')
          } else {
            console.log("error");
          }
        });
    } catch (err) {
      console.log("error: ", err);
    }

  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
