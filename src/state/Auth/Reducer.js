import { GET_USER_REQUEST, LOGIN_REQUEST, REGISTER_REQUEST,REGISTER_SUCCESS, LOGIN_SUCCESS,GET_USER_SUCCESS, REGISTER_FAILURE,LOGIN_FAILURE,GET_USER_FAILURE, LOGOUT, user } from "./ActionType";


const initialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer=(state=initialState,action)=>{

    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading:true, error:null}
            case REGISTER_SUCCESS:
             case LOGIN_SUCCESS:
                return {...state, isLoading:false, error:null, jwt:action.payload}
                case GET_USER_SUCCESS:
                    return { ...state, isLoading:false, error:null, user:action.payload}    
                case REGISTER_FAILURE:
                    case LOGIN_FAILURE:
                        case GET_USER_FAILURE:
                            return {...state, isLoading:false, error:action.payload}
                            case LOGOUT :
                                return {...initialState}
            default: {
                return state;
            }
    }
}







// export const REGISTER_REQUEST='REGISTER_REQUEST';
// export const REGISTER_SUCCESS='REGISTER_SUCCESS';
// export const REGISTER_FAILURE='REGISTER_FAILURE';

// export const LOGIN_REQUEST='LOGIN_REQUEST';
// export const LOGIN_SUCCESS='LOGIN_SUCCESS';
// export const LOGIN_FAILURE='LOGIN_FAILURE';


// export const GET_USER_REQUEST='GET_USER_REQUEST';
// export const GET_USER_SUCCESS='GET_USER_SUCCESS';
// export const GET_USER_FAILURE='GET_USER_FAILURE';

// export const LOGOUT= "LOGOUT";