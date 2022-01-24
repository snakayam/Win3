import React, { useState, useEffect } from "react"
import "../styles/globals.css"
import Layout from "../components/Layout"
import { useSelector, useDispatch } from "react-redux"
import Axios from "axios"
import { useStore } from "../store"
import { Provider } from 'react-redux'

Axios.defaults.baseURL = "http://localhost:8080"

const App = ({ Component, pageProps }) => {

  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </Layout>
    </Provider>
  )
}

export default App
