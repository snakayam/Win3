import React from "react"
import style from "../styles/Header.module.css"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../actions/authorization"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import HomeIcon from "@mui/icons-material/Home"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import EmailIcon from "@mui/icons-material/Email"
import Avatar from "@mui/material/Avatar"
import { Grid } from "@material-ui/core"
import Link from 'next/link'


export default function HeaderLoggedIn() {
  // function handleLogout() {
  //   props.setLoggedIn(false)
  //   localStorage.removeItem("Win3Token")
  //   localStorage.removeItem("Win3Username")
  //   localStorage.removeItem("Win3Avatar")
  // }
  // const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  const dispatch = useDispatch()

  async function handleLogout(e){
    e.preventDefault()
    await dispatch(logout())
  }
  
  return (
  

    <Grid container direction="row" justifyContent="flex-end">
      <Grid item xs={1}>
        <Link href="/">
          <HomeIcon className={style.icons} />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="/">
          <BorderColorIcon className={style.icons} />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="/">
          <EmailIcon className={style.icons} />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="/">
          <CircleNotificationsIcon className={style.icons} />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="/">
          <BuildCircleIcon className={style.icons} />
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link href="/">
        
          <Avatar alt="username" sx={{ width: 25, height: 27 }} />
        </Link>
      </Grid>

      <button onClick={handleLogout}></button>
      {/* <button onClick={() => props.setLoggedIn(false)}>ログアウト</button> */}
    </Grid>
  )
}
