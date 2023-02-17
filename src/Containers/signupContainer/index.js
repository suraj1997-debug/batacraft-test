import React,{useState} from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';
import { Button, Container, Form,Row,Col } from 'react-bootstrap';
import { Link ,Redirect } from 'react-router-dom';
import {signupUser} from '../../Redux/Action/authAction';
import { Formik } from 'formik';

function SignupContainer(props) {


    const auth = useSelector(state=>state.auth);

    const dispatch = useDispatch();


   if(auth.authenticate){
      return <Redirect  to={`/`} />
   }
    
    return (
        <>
          
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        dispatch(signupUser(values.email,values.password));
       }}
     >
       {({handleChange,values, errors,touched,handleSubmit}) => (
                <Form className="Form" style={{ boxShadow: "2px 2px 8px black", padding: "10px", height: "28rem", width: "31rem", marginTop: "4.9rem" }} >
                    <p>{props.msg}</p>
                    <h1 className="textCenter" style={{fontSize:'none !important'}}>SignUp</h1>
                    <br />

                    <Form.Group as={Row} controlId="email" >
                        <Form.Label column sm={4}>Email</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="email" value={values.email} onChange={handleChange} autoComplete="off" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="password">
                        <Form.Label column sm={4}>Password</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="password" value={values.password} onChange={handleChange} autoComplete="off" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit">SignUp</Button>
                    <br /><br />
                    <p>Already Have an Account?<Link to="/signIn"> Login Here</Link></p>
                </Form>
                   )}
                   </Formik>
            </Container>
          
        </>
    );
}



export default SignupContainer;