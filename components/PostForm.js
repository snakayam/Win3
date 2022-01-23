import React from "react"
import { Container } from "@mui/material"
import { Box } from "@mui/material"
import style from "../styles/Layout.module.css"
import Button from "@mui/material/button"
import Axios from 'axios'
import { useState, useEffect } from "react"

export default function PostForm() {
const [title, setTitle] = useState()
const [body, setBody ] = useState()
const [file, setFile] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
//     try{
//      const responce = await Axios.post('/post', {title, body,file,token:localStorage.getItem("Win3token")})
// navigate(`/SpecficPost/${responce.data}`)
//     }catch(e){
// console.log("There was a proble.")
//     }
  }

  return (
    <Container maxWidth="sm" className={style.container}>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }} className={style.box}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <input autoFocus type="text"onChange={e=>setTitle(e.target.value)} />
          <input type="text" onChange={e=>setBody(e.target.value)} />
          <input type="file" onChange={e=>setFile(e.target.value)}/>
          <Button type="submit" variant="contained" sx={[{ mt: 3, mb: 2, bgcolor: "orange" }, { "&:hover": { bgcolor: "orange" } }]}>
            投稿
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
