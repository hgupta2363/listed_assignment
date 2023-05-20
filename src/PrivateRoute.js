import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './contextProvider/AuthContextProvider';
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('in private route');
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};
export default PrivateRoute;
