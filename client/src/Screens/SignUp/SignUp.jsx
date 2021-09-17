import { useState } from "react";
import { signUp } from "../../Services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await signUp(form);
      props.setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  return (
    <Layout user={props.user}>
      <form id="sign-up-form" onSubmit={handleSignUp}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={form.username}
          placeholder="Enter username"
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={form.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={form.passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </Layout>
  );
};

export default SignUp;
