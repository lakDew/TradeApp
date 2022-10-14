import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { validatePassword } from "../../utils";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onFormFill = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

    if (e.target.name == "password") {
      const validate = validatePassword(e.target.value);

      if (validate) {
        setError(validate);
      } else {
        setError("");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (userDetails.form != "" && userDetails.password != "" && error == "") {
      localStorage.setItem("login", true);
      navigate("/dashboard");
    } else {
      setError("please fill form correctly");
    }
  };

  return (
    <div>
      <form>
        <p>Welcome to Dashboard, Login</p>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="name"
          value={userDetails.name}
          onChange={onFormFill}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userDetails.password}
          onChange={onFormFill}
        />
        {error && <span>{error}</span>}
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
