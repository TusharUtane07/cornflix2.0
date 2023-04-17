import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../FirebaseConfig";

const Login = () => {
  const navigate = useNavigate();

  let googleProvider = new GoogleAuthProvider();
  const singIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        localStorage.setItem("userEmail", res.user.email);
        localStorage.setItem("name", res.user.displayName);
        // console.log("successfully logged in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <div className="heading">
        <h1 onClick={singIn}>Login with Google</h1>
      </div>
    </div>
  );
};

export default Login;
