import {authConstant, userConstant} from './constant';
import axios from '../../helpers';


export const loginUser=(email,password)=>{

    return async dispatch=>{

        dispatch({
            type:authConstant.LOGIN_REQUEST
        })
       
      const res = await axios.post('/api/login',{
        email:email,
        password:password
      });
            if(res.status === 200){
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify(user));
 
                dispatch({
                 type:authConstant.LOGIN_SUCCESS,
                 payload:{
                     token,user
                 }
             })
            }else{
                if(res.status === 500){
                    dispatch({
                        type:authConstant.LOGIN_FAILURE,
                        payload:{
                            error:'Invalid Login'
                        }
                    })
                }
            }
    
    }
}


export const isUserLoggedIn=()=>{
    return async dispatch =>{
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type:authConstant.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({
                type:authConstant.LOGIN_FAILURE,
                payload:{
                    error:'User Needs to login'
                }
            })
        }
    }
}



export const logoutUser = ()=>{
    return async dispatch =>{
        dispatch({
            type:authConstant.LOGOUT_REQUEST
        })
       
            localStorage.clear();
            dispatch({
                type:authConstant.LOGOUT_SUCCESS
            })
    }
}


export const signupUser =(email,password)=>{
    return async dispatch=>{

        dispatch({
            type:userConstant.SIGNUP_REQUEST

        })


    const res = await axios.post('/api/register',{
                email:email,
                password:password
});
        if(res.status === 201){
            console.log(res);
            const msg=res.data.msg;
            dispatch({
             type:userConstant.SIGNUP_SUCCESS,
             payload:{
                 msg:msg
             }
         })
        }
         else{
             if(res.status === 400){
                dispatch({
                    type:userConstant.SIGNUP_FAILURE,
                   payload:{
                        error:'Registration Failed'
                   }
                   })
             }
         }  
       
    }
}