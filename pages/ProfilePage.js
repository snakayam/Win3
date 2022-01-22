import React from "react"
// import "../styles/globals.css";
import Header from "../components/Header"
import ProfileInfo from "../components/ProfileInfo"
import DisplayPosts from "../components/DisplayPosts"
import Footer from "../components/Footer"

export default function ProfilePage() {
  return (
    <div>
      <Header />
      <ProfileInfo />
      <DisplayPosts />
      <Footer />
    </div>
  )
}
