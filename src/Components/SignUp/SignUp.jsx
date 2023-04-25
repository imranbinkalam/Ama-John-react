import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const Confirm = form.Confirm.value;
    console.log(email, password, Confirm);

    setError("");
    if (password !== Confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be Six Characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggerUser = result.user;
        console.log(loggerUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="Confirm">Confirm Password</label>
          <input type="password" name="Confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign up" />
      </form>
      <p className="small-link">
        <small>
          Already have an account?
          <Link className="yellow" to="/login">
            Login
          </Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
