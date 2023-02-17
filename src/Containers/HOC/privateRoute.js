import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest})=>{
  console.log('component',Component)
  const token = window.localStorage.getItem('token');
  console.log('token',token);
  return  <Route {...rest} component={(props)=>{
    if(token){
     return <Component {...props} />
    } else{
     return <Redirect to={`/signIn`} />
    }
  }}/>
    
}

export default PrivateRoute;