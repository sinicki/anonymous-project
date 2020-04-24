import React, { useEffect, useState, ReactElement } from "react";
import UserContext from "../contexts/user";
import { auth } from "../services/firebase";

export default (Comp: (props: any) => ReactElement) => (props: any) => {
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
    auth().onAuthStateChanged((user) => {
      console.log(user);
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
  }, []);
  return (
    <UserContext.Provider value={state.user}>
      <Comp {...props} user={state.user} />
    </UserContext.Provider>
  );
};
