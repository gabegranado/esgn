import { useState } from "react";
import { loginFields } from "../../constants/signin-up/FormFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInAction } from "../../actions/user";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = async () => {
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        {
          identifier: loginState["email-address"],
          password: loginState.password
        }
      );
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { identifier: response.data.username },
      });
      const username = cookies.get("_auth_state").identifier;
      console.log("COOKKIIES", cookies.get("_auth_state").identifier);
      dispatch(signInAction())
      navigate(`/home`);

    } catch (err) {
      console.log("error: ", err);
      if (err.response && err.response.status === 400) {
        setError("Password or email do not match.");
      } else {
        setError("An error occurred. Please try again later."); 
      }
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
