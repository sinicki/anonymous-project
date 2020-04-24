import React, { useEffect, useState, ReactElement } from "react";
import { auth } from "../services/firebase";

export default (Comp: (props: any) => ReactElement) => (props: any) => {
  const [state, setState] = useState<{
    authenticated: boolean;
    loading: boolean;
    user?: any;
  }>({
    authenticated: false,
    loading: true,
    user: undefined,
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
          user: undefined,
        });
      }
    });
  }, []);
  return <Comp {...props} user={state.user} />;
};
