import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../../actions/user";
import Cookies from 'js-cookie';
import { useCookies } from "react-cookie";

const SignOutOrInButton = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Access isAuthenticated state from Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("AUTHTHTHTHTH", isAuthenticated);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const user = Cookies.get("_auth_state");

  var username = "";

  if (user) {
    for (var key in JSON.parse(user)) {
      if (key == "identifier") {
        username = JSON.parse(user)[key];
      }
    }
  }

  const handleSignOut = () => {
    Cookies.remove("_auth_state")
    dispatch(signOutAction()); // Dispatch the signOut action
    navigate("/");
  };

  if (isAuthenticated || username != "") {
    return <button onClick={handleSignOut}>Sign Out</button>;
  } else {
    return (
      <a href="/SignUp">
        <button className="bg-primary text-white px-6 py-2 rounded-full">
          Get Started
        </button>
      </a>
    );
  }
};

export default SignOutOrInButton;
