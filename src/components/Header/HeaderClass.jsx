import axios from 'axios';
import React from 'react';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { setAuthUserData } = this.props;
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}
export default HeaderContainer;
