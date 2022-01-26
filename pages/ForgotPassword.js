import React from "react"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { SelectAllRounded } from "@material-ui/icons"


export default function ForgotPassword() {
  const [email, setEmail] = useState()
  async function handleSubmit(event) {
    // event.preventDefault()
    // try {
    //   Axios.post("http://localhost:8080/register", { email })
    //   console.log("User was succesfully created.")
    // } catch (e) {
    //   console.log("There was an error.")
    // }
  }
  const selector = useSelector((state) => state)
  console.log(selector)

  return (
    <>
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography component="h2" variant="h5" sx={{ borderBottom: 1, marginBottom: "30px", borderColor: "gray" }}>
              パスワードを忘れた場合
            </Typography>
            <TextField margin="normal" required fullWidth id="email" label="メールアドレス" name="email" autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
            <Button type="submit" fullWidth variant="contained" sx={[{ mt: 3, mb: 2, bgcolor: "orange" }, { "&:hover": { bgcolor: "orange" } }]}>
             送信
            </Button>
          </Box>
        </Box>
      </Container>

 
    </>
  )
}
