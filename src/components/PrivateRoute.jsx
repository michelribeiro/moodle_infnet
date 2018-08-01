import React from "react";
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest, isLoggedIn }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} {...rest}/>
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default PrivateRoute