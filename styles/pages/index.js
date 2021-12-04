// import Head from 'next/head'
// import Image from 'next/image'
import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  )
}

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
