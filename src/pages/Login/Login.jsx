import axios from "axios";
import { previousDay } from "date-fns";
import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../components/contextapi/AuthContext";
import "./login.css";

function Login() {
  const [Credentials, setCredentials] = useState({
    username: "",
    passeword: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(Credentials);
    dispatch({ type: "LOGIN_START" });
    try {
      console.log("try block " + Credentials.username);
      const res = await axios.post("/auth/login", Credentials);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="password"
          placeholder="passeword"
          id="passeword"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleLogin} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}

export default Login;
