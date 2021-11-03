import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <WhatsAppIcon sx={{ fontSize: 100 }} color="success" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
