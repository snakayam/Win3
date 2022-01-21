import React, { useEffect } from "react"
import Header from "../components/Header"
import MainPost from "../components/MainPost"
import RelatedPosts from "../components/RelatedPosts"
import Footer from "../components/Footer"

export default function SpecificPost() {
  return (
    <>
      <Header />
      <MainPost />
      <RelatedPosts />
      <Footer />
    </>
  )
}
