import React, { ReactElement, useContext, useEffect, useState } from "react";
import UserContext from "../contexts/user";
import { FirebaseContext } from "../firebase";

export default (Comp: (props: any) => ReactElement) => (props: any) => {
  const firebaseContext = useContext(FirebaseContext);
  console.log("context");
  console.log(firebaseContext);
  const [state, setState] = useState<{
    authenticated: boolean;
    loading: boolean;
    user: {} | null;
  }>({
    authenticated: false,
    loading: true,
    user: null,
  });
  useEffect(() => {
    if (firebaseContext !== null) {
      // @ts-ignore
      firebaseContext.auth().onAuthStateChanged((user: any) => {
        if (user) {
          setState({
            authenticated: true,
            loading: false,
            user,
          });
        } else {
          setState({
            authenticated: false,
            loading: false,
            user: null,
          });
        }
      });
    }
  }, [firebaseContext]);
  return (
    <UserContext.Provider value={state.user}>
      <Comp {...props} user={state.user} />
    </UserContext.Provider>
  );
};
