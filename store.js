import { useMemo } from "react"
import { createStore, applyMiddleware, compose } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import combineReducers from "./reducers"
// import persistState from "redux-localstorage"
import throttle from "lodash.throttle"

// const store = createStore(
//   app,
//   persistedState
// );

let store

function initStore(persistedState) {
  // function initStore(persistedState) {
  return createStore(combineReducers, persistedState, applyMiddleware(thunk))
  // return compose(persistState())(createStore(combineReducers, initialState, applyMiddleware(thunk)))
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    store = undefined
  }

  if (typeof window === "undefined") return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  // store.subscribe(throttle(() => {
  //   saveState({
  //     isLoggedIn: store.getState().isLoggedIn
  //   })
  // }, 1000));
  return store
}

// import {
//   createStore,
//   compose,
//   applyMiddleware,

// } from 'redux'
// import thunk from 'redux-thunk'
// import persistState from "redux-localstorage"

// import combineReducers from './reducers'

// // export default function createStore(){
// //   return compose(persistState())(reduxCreateStore(
// //     combineReducers({
// //       authorization: authorizationReducer
// //     }),applyMiddleware(thunk)

// //   )
// //   )

// // }
// const enhancer = compose(persistState())

// const store =  createStore(combineReducers, enhancer, applyMiddleware(thunk))
// export default store
