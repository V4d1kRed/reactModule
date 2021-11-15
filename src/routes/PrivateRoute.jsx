import React from 'react';
import {Redirect, Route} from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({path, component: Component}) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => {
        if (localStorage.getItem('session_id')) {
          return <Component/>
        }
        return <Redirect to="/login"/>
      }}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
};

export default PrivateRoute;
