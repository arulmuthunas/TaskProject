import * as axios from 'axios';
import {CommonAPI} from '../Screens/Common/api'
export const LOGIN_REQUEST ='LOGIN_REQUEST';
export const GET_LIST ='GET_LIST'
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json'
  }
};
export const getList = () => dispatch =>{ 
  axios.get(CommonAPI.Get_list,axiosConfig)
.then(function (response) {
  console.log(response.data);
  dispatch({
    type:GET_LIST,
    payload:response.data, 
  })
})
.catch(function (error) {
  console.log(error);
})
}
export const AuthAction = payload => dispatch =>{
  console.log('payload',payload)
    dispatch({
        type:LOGIN_REQUEST,
        payload:payload,
    });
};

