import { useState } from "react";
import { signIn } from "../../Services/users";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const user = await signIn(form);
      props.setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
      return <button type="submit">Sign In</button>;
    }
  };

  return (
    <Layout user={props.user}>
      <div className="sign-in-container">
        <form onSubmit={handleSignIn}>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            required
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {renderError()}
        </form>
        <Link to="/sign-up">
          <button>Create an account</button>
        </Link>
      </div>
    </Layout>
  );
};

export default SignIn;
