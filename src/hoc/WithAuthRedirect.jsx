import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import React from 'react';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const { isAuth } = this.props;
      if (!isAuth) return <Navigate to='/login' />;
      return <Component {...this.props} />;
    }
  }
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};
