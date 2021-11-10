import { useEffect } from "react";
import { signOut } from "../../Services/users";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
  const history = useHistory();
  const { setUser } = props;
  useEffect(() => {
    const signOutUser = async () => {
      await signOut();
      setUser(null);
      props.setUserCart([]);
      history.push("/");
    };
    signOutUser();
  }, [history, setUser]);

  return "";
};

export default SignOut;
