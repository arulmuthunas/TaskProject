import {LOGIN_REQUEST,SET_USER_PASSWORD,GET_LIST} from './action';

const initailState ={
    logindata:'',
    getData :[]
}
function userReducer(state = initailState,action){
    switch(action.type){
        case LOGIN_REQUEST:
            return { ...state, logindata : action.payload};
        case GET_LIST:
                return {...state, getData: action.payload};
        default:
            return state;
    }
}
export default userReducer;