import { Button } from "antd";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FormInputContext } from "./context/Context";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBBXgmYjCBtDR2LHc9WHudVfYVWjtqP_sA",
  authDomain: "cardeets-frontend-nb.firebaseapp.com",
  projectId: "cardeets-frontend-nb",
  storageBucket: "cardeets-frontend-nb.appspot.com",
  messagingSenderId: "419756357501",
  appId: "1:419756357501:web:afce1c4508f239d0d43e14",
};

function connectAuth() {
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
}

function Login() {
  const navigate = useNavigate();
  const { setUser, setUserID } = useContext(FormInputContext);

  function handleGoogleLogin() {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        setUserID(res.user.uid);
        navigate("/create");
      })
      .catch(console.error);
  }

  return <Button onClick={handleGoogleLogin}>Google login</Button>;
}

export default Login;
