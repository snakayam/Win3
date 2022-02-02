import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import orange from "@material-ui/core/colors/orange"
import teal from "@material-ui/core/colors/teal"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import HeaderLoggedIn from "./HeaderLoggedIn"
import HeaderLoggedOut from "./HeaderLoggedOut"
import { useSelector } from "react-redux"
import { Link as MuiLink } from "@material-ui/core"
import Link from "next/link"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import HomeIcon from "@mui/icons-material/Home"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import EmailIcon from "@mui/icons-material/Email"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: teal[200]
    }
  }
})

export default function Header() {
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  return (
    <div className="header">
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link href="/" className="title">
              <a>
                <MuiLink >Win-3</MuiLink>
              </a>
            </Link>
          </Toolbar>
        </AppBar>
        <Container className="searchBox">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="キーワードで探す" inputProps={{ "aria-label": "search google maps" }} />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Container>
        {isLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut /> }
        {/* <div className="icons">
          <HomeIcon />
          <BorderColorIcon />
          <EmailIcon />
          <CircleNotificationsIcon />
          <BuildCircleIcon />
          <AccountCircleIcon />
        </div> */}
      </ThemeProvider>
    </div>
  )
}
