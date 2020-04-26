import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FirebaseContext } from "../../firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  authCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// @ts-ignore 
export default (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState<{ error?: string }>({ error: undefined });
  const firebaseContext = useContext(FirebaseContext);

  async function googleSignIn() {
    try {
      // @ts-ignore
      await firebaseContext.signinWithGoogle();
      history.push('/#about')
    } catch (error) {
      console.log("error");
      console.log(error);
      setState({ error: error.message });
    }
  }

  return (
    <div className={classes.authCont}>
      <div>
        <Button onClick={googleSignIn}>Sign in with Google</Button>
        <div>{state.error}</div>
      </div>
    </div>
  );
};
