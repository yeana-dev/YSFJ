import { useEffect } from "react";
import { signOut } from "../../Services/users";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
  const history = useHistory();

  useEffect(() => {
    const signOutUser = async () => {
      await signOut();
      props.setUser(null);
      history.push("/");
    };
    signOutUser();
  }, [history, props.setUser]);

  return "";
};

export default SignOut;
