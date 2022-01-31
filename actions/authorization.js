import { SIGNING_IN_SUCCESS, SIGNING_IN_FAIL, SET_AUTHORIZATION_LOADING, REMOVE_AUTHORIZATION_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, USER_SUCCESS, USER_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from "./types"
import Axios from "axios"

export const register = (email, password) => async (dispatch) => {
  dispatch({
    type: SET_AUTHORIZATION_LOADING
  })

  try {
    const res = Axios.post(
      "/api/user/create/",
      { email, password },
      // {
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // }
    )
    console.log(res)
    // console.log(Axios.get("api/user/create"))
    localStorage.setItem("Logged in ?", true)
    dispatch({
      type: SIGNING_IN_SUCCESS
    })
  } catch (err) {
    dispatch({
      type: SIGNING_IN_FAIL
    })
  }

  dispatch({
    type: REMOVE_AUTHORIZATION_LOADING
  })
}

export const login = (username, password) => async (dispatch) => {
  dispatch({
    type: SET_AUTHORIZATION_LOADING
  })
  try {
    // Axios.post(
    //   "/api/user/create/",
    //   { email, password },
    //   {
    //     headers: {
    //       "content-type": "application/json"
    //     }
    //   }
    // )
    const response = await Axios.post(
      "/authen/",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
      )
      localStorage.setItem("response", response.data.token)
    localStorage.setItem("Logged in ?", true)
    dispatch({
      type: LOGIN_SUCCESS
    })
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    })
  }

  dispatch({
    type: REMOVE_AUTHORIZATION_LOADING
  })
}

export const user = () => async (dispatch) => {
  dispatch({
    type: SET_AUTHORIZATION_LOADING
  })

  try {
    console.log("sent")
    Axios.get("/user")

    // if (res.status === 200){
    dispatch({
      type: USER_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_FAIL
    })
  }

  dispatch({
    type: REMOVE_AUTHORIZATION_LOADING
  })
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: SET_AUTHORIZATION_LOADING
  })

  try {
    dispatch({
      type: LOGOUT_SUCCESS
    })
    localStorage.setItem("Logged in ?", false)
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL
    })
  }
  dispatch({
    type: REMOVE_AUTHORIZATION_LOADING
  })
}
