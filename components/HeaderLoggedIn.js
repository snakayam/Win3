import React from "react"
import style from "../styles/Header.module.css"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import HomeIcon from "@mui/icons-material/Home"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import EmailIcon from "@mui/icons-material/Email"
import Avatar from "@mui/material/Avatar"
import { Grid } from "@material-ui/core"


export default function HeaderLoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false)
    localStorage.removeItem("Win3Token")
    localStorage.removeItem("Win3Username")
    localStorage.removeItem("Win3Avatar")
  }

  return (
    <Grid container direction="row" justifyContent="flex-end">
      <Grid item xs={0.5}>
        <a href="/">
          <HomeIcon className={style.icons} />
        </a>
      </Grid>
      <Grid item xs={0.5}>
        <a href="/">
          <BorderColorIcon className={style.icons} />
        </a>
      </Grid>
      <Grid item xs={0.5}>
        <a href="/">
          <EmailIcon className={style.icons} />
        </a>
      </Grid>
      <Grid item xs={0.5}>
        <a href="/">
          <CircleNotificationsIcon className={style.icons} />
        </a>
      </Grid>
      <Grid item xs={0.5}>
        <a href="/">
          <BuildCircleIcon className={style.icons} />
        </a>
      </Grid>
      <Grid item xs={0.5}>
        <a href="/">
          {/* <AccountCircleIcon className={style.icons} /> */}
          <Avatar alt="username" src={localStorage.getItem("Win3Avatar")} sx={{ width: 25, height: 27 }} />
        </a>
      </Grid>

      {/* <button onClick={handleLogout}></button> */}
      {/* <button onClick={() => props.setLoggedIn(false)}>ログアウト</button> */}
    </Grid>
  )
}
