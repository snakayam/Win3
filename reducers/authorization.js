import {
  SIGNING_IN_SUCCESS,
  SIGNING_IN_FAIL,
  SET_AUTHORIZATION_LOADING,
  REMOVE_AUTHORIZATION_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_SUCCESS,
  USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
}
from "../actions/types"

function loadState(){
  try {
    const serializedState = localStorage.getItem('Logged in ?');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

const loggedInData = loadState()

const defaultState = {
  user: null,
  isLoggedIn: loggedInData,
  loading: false
}

export default function authorizationReducer(state = defaultState, action) {
  const{type, payload} = action
  switch (type){
    case SIGNING_IN_SUCCESS:
      return{
        ...state,
        isLoggedIn:true
      }
    case SIGNING_IN_FAIL:
      return{
        ...state,
        // isLoggedIn:'false'
      }
    case LOGIN_SUCCESS:
      return{
        ...state,
        isLoggedIn:true
      }
    case LOGIN_FAIL:
      return{
        ...state,
        // isLoggedIn:'false'
      }
    case LOGOUT_SUCCESS:
      return{
        ...state,
        isLoggedIn:false
      }
    case LOGOUT_FAIL:
      return{
        ...state,
      }

    case USER_SUCCESS:
      return{
        ...state,
        user: payload.user
      }
    case USER_FAIL:
      return{
        ...state,
        // isLoggedIn:'false'
      }

    case SET_AUTHORIZATION_LOADING:
      return{
        ...state,
        loading:true
      }

    case REMOVE_AUTHORIZATION_LOADING:
      return{
        ...state,
        loading:false
      }



    default:
      return state
  }


}
