import axios from 'axios';
import store from './Redux/Store/store';
import { authConstant } from './Redux/Action/constant';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL:'https://reqres.in',
    headers:{
        'Authorization': token ? `Bearer ${token}` : ''
    }
});


axiosInstance.interceptors.request.use(req=>{
    const{auth} = store.getState();
    if(auth.token){
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
})


axiosInstance.interceptors.response.use(res=>{
   
    return res;
},(error)=>{
    const status = error.response ? error.response.status : 500;
    if(status){
    if( status === 500){
        localStorage.clear();
        store.dispatch({
            type:authConstant.LOGOUT_SUCCESS
        })
    }
}
    return Promise.reject(error);
})

export default axiosInstance;