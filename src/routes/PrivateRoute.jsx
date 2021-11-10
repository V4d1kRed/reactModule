import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({path, component: Component}) => {
  const {login} = useSelector(state => state.user);

  return (
    <Route path={path} exact render={(props) => {
      if (login) {
        return <Component/>;
      }
      return <Redirect to="/login"/>
    }}/>
  );
};

export default PrivateRoute;
