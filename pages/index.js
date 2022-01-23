import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"
import HomeGuest from "../components/HomeGuest"
import Axios from "axios"
// Axios.defaults.baseURL = 'http:localhost'
import Flash from "../components/Flash"


export default function FrontPage() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("Win3Token")))

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? <Home setLoggedIn={setLoggedIn} /> : <HomeGuest setLoggedIn={setLoggedIn} />}
      <Footer />
    </>
  )
}
