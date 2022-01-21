import * as React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"

const theme = createTheme()

export default function SignIn() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(event) {
    event.preventDefault()
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // alert("submitted")
    try {
      Axios.post("http://localhost:8080/register", { username, email, password })
      console.log("User was succesfully created.")
    } catch (e) {
      console.log("There was an error.")
    }
  }

  return (
    <>
    <Header />
    <ThemeProvider theme={theme}>
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
            WIN-3
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="username" label="ユーザーネーム" name="username" autoComplete="username" autoFocus onChange={(e) => setUsername(e.target.value)} />
            <TextField margin="normal" required fullWidth id="email" label="メールアドレス" name="email" autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
            <TextField margin="normal" required fullWidth name="password" label="パスワード" type="password" id="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ログイン情報を保存"
            /> */}
            <Button type="submit" fullWidth variant="contained" sx={[{ mt: 3, mb: 2, bgcolor:'orange' }, {"&:hover":{bgcolor:'orange'}}]}>
              ログイン
            </Button>
            <Grid container marginBottom="50px">
              <Grid item xs>
                <Link href="#" variant="body2">
                  パスワードを忘れた場合
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"新規会員登録"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <Footer />
    </>
  )
}
