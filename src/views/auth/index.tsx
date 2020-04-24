import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { FirebaseContext } from "../../firebase";

export default () => {
  const [state, setState] = useState<{ error?: string }>({ error: undefined });
  const firebaseContext = useContext(FirebaseContext);

  async function googleSignIn() {
    try {
      // @ts-ignore
      console.log(await firebaseContext.signinWithGoogle());
    } catch (error) {
      setState({ error: error.message });
    }
  }

  return (
    <div>
      Auth
      <div>
        <Button onClick={googleSignIn}>Sign in with Google</Button>
        <div>{state.error}</div>
      </div>
    </div>
  );
};
