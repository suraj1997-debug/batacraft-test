import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link,Redirect  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/Store';
import { Formik } from 'formik';

const LoginContainer = (props) => {
   
 
    const dispatch = useDispatch();
 
  
    
   const auth = useSelector(state=>state.auth)


   if(auth.authenticate){
     return  <Redirect  to={`/`} />
   }

    return (
        <Container style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
             <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values) => {
        console.log('values',values)
        dispatch(loginUser(values.email,values.password));
       }}
     >
       {({handleChange,values, errors,touched,handleSubmit}) => (
         <Form onSubmit={handleSubmit}  style={{ boxShadow: "2px 2px 8px black", padding: "10px", height: "26rem", width: "31rem",marginTop:"6rem",padding:"2rem 0" }} >
                    <p>{props.msg}</p>
                    <h1 className="textCenter" style={{fontSize:'none !important'}}  >SignIn</h1>
                    <br /><br />
                    <Form.Group as={Row} controlId="email" >
                        <Form.Label column sm={4}>Email</Form.Label>
                        <Col sm={7}>
                        <Form.Control type="email" name='email' onChange={handleChange} value={values.email} autoComplete="off" />
                        </Col>
                        {errors.email && touched.email && errors.email}
                    </Form.Group>

                    <Form.Group as={Row} controlId="password">
                        <Form.Label column sm={4}>Password</Form.Label>
                        <Col sm={7}>
                        <Form.Control type="password" name='password' onChange={handleChange} value={values.password} autoComplete="off" />  
                        </Col>
                        {errors.password && touched.password && errors.password}
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit" >Signin</Button>
                    <br /><br />
                    <p>Don't Have an Account!<Link to="/signUp" > Register Here</Link></p>
                </Form>
                    )}
                    </Formik>
        </Container>
    )
}

export default LoginContainer;