import React, { useState } from "react"
import { useSelector } from "react-redux"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"
import HomeGuest from "../components/HomeGuest"
import useStore from "../store"
import Flash from "../components/Flash"
export default function FrontPage() {
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("Win3Token")))
  // const state = useStore(isLoggedIn)
  console.log(isLoggedIn)
  return (
  <>
  {isLoggedIn ? <Home />　: <HomeGuest />}
  
  </>
  )
}
