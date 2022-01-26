import * as React from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { register } from "../actions/authorization"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Axios from "axios"

export default function SignUp() {
  const dispatch = useDispatch()
  const router = useRouter()
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  const loading = useSelector((state) => state.authorization.loading)

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = userData
  console.log(isLoggedIn)
  function onChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      
      dispatch(register(email, password))

      // await Axios.post("/register", { username, email, password })
    }
  }

  // if (isLoggedIn = true) {
  //   router.push("/")
  // }

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
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
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="メールアドレス" name="email" autoComplete="email" onChange={onChange} value={email} />
            <TextField margin="normal" required fullWidth name="password" label="パスワード" type="password" id="password" autoComplete="current-password" onChange={onChange} value={password} />
            {loading ? (
              <p>loading</p>
            ) : (
              <Button type="submit" fullWidth variant="contained" sx={[{ mt: 3, mb: 2, bgcolor: "orange" }, { "&:hover": { bgcolor: "orange" } }]}>
                新規会員登録
              </Button>
            )}

            <p>
              既にアカウントをお持ちの方は
              <Link href="/SignIn" variant="body2">
                {"ログイン"}
              </Link>
            </p>
          </Box>
        </Box>
      </Container>
      {/* </ThemeProvider> */}
    </>
  )
}
