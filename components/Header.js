import React from "react"
import { useState } from "react"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import Button from "@material-ui/core/Button"
import orange from "@material-ui/core/colors/orange"
import teal from "@material-ui/core/colors/teal"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import HeaderLoggedIn from "./HeaderLoggedIn"
import HeaderLoggedOut from "./HeaderLoggedOut"
import { Link as MuiLink } from "@material-ui/core"
import Link from "next/link"

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: teal[200]
    }
  }
})

export default function Header(props) {
  // const [loggedIn, setLoggedIn] = useState()
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("Win3Token")))
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  return (
    <div className="header">
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Link href="/"><a><MuiLink variant={"h3"}style={{ color: "white", textDecoration: "none", fontSize: 35 }}>Win-3</MuiLink></a></Link>
          </Toolbar>
        </AppBar>
        <Toolbar>
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
        
        </Toolbar>
      </ThemeProvider>
      
    </div>
  )
}
