import React from 'react';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { getAuthUserData } = this.props;
    getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}
export default HeaderContainer;
