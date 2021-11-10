import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import PrivateRoute from "./PrivateRoute";

const RoutesList = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => (
          route.isPrivat
            ? (<PrivateRoute key={index} path={route.path} component={route.component}/>)
            : (<Route key={index} path={route.path} component={route.component} exact/>)
        ))
      }
      <Redirect to='/error'/>
    </Switch>
  );
};

export default RoutesList;
