import './App.css';
import { connect } from 'react-redux';
/* import {
  useLocation,
  useNavigate, useParams,
} from 'react-router-dom';
*/
import { compose } from 'redux';
import { App } from './AppConnect.jsx';
import { initializeApp } from './redux/app-reducer';

/* function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
*/
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  connect(mapStateToProps, { initializeApp }),
  // withRouter,
)(App);
