import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FirebaseContext } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  authCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default () => {
  const classes = useStyles();
  const [state, setState] = useState<{ error?: string }>({ error: undefined });
  const firebaseContext = useContext(FirebaseContext);

  async function googleSignIn() {
    try {
      // @ts-ignore
      await firebaseContext.signinWithGoogle();
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
