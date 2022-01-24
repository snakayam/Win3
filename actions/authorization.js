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
from "./types"
import Axios from "axios"

export const register = (username, email, password) => async (dispatch)=>{
  dispatch({
    type: SET_AUTHORIZATION_LOADING,
  })

  try{
    
    Axios.post("/register", { username, email, password })
    
    // if (res.status === 200){
      dispatch({
        type:SIGNING_IN_SUCCESS,
        
      })

  } catch(err){
    dispatch({
      type:SIGNING_IN_FAIL
    })
  }

  dispatch({
    type:REMOVE_AUTHORIZATION_LOADING
  })
}

export const login = (username, password) => async (dispatch)=>{
  dispatch({
    type: SET_AUTHORIZATION_LOADING,
  })

  try{
    console.log("sent")
    Axios.post("/login", {username, password })
    
    // if (res.status === 200){
      dispatch({
        type:LOGIN_SUCCESS
      })

  } catch(err){
    dispatch({
      type:LOGIN_FAIL
    })
  }

  dispatch({
    type:REMOVE_AUTHORIZATION_LOADING
  })
}

export const user = () => async (dispatch)=>{
  dispatch({
    type: SET_AUTHORIZATION_LOADING,
  })

  try{
    console.log("sent")
    Axios.get("/user")
    
    // if (res.status === 200){
      dispatch({
        type:USER_SUCCESS,
        payload:data
      })

  } catch(err){
    dispatch({
      type:USER_FAIL
    })
  }

  dispatch({
    type:REMOVE_AUTHORIZATION_LOADING
  })
}

export const logout = () => async (dispatch) => {



//   dispatch({
//     type:SET_AUTHORIZATION_LOADING
//   })

// try{

//   dispatch({
//     type:LOGOUT_SUCCESS
//   })
  
// }catch(err){
//   dispatch({
//     type:LOGOUT_FAIL
//   })

// }
// dispatch({
//   type:REMOVE_AUTHORIZATION_LOADING
// })

}
