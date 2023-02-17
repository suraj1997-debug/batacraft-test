import './App.css';
import LoginContainer from './Containers/loginContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  Route, Switch } from 'react-router-dom';
import { isUserLoggedIn } from './Redux/Store';
import SignupContainer from './Containers/signupContainer';
import HomeContainer from './Containers/homeContainer';
import PrivateRoute from './Containers/HOC/privateRoute';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

console.log('auth',auth)
 // ComponentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, [auth.authenticate]);
  return (
    <div className="App">
      <Switch>
      <PrivateRoute exact path="/" component={HomeContainer} />
        <Route path="/signUp" component={SignupContainer } />
        <Route path="/signIn" component={ LoginContainer } />
      </Switch>
    </div>
  );
}

export default App;
