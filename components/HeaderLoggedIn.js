import React from "react"
import style from "../styles/Header.module.css"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications"
import BuildCircleIcon from "@mui/icons-material/BuildCircle"
import HomeIcon from "@mui/icons-material/Home"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import EmailIcon from "@mui/icons-material/Email"

export default function HeaderLoggedIn() {
  return (
    <div className={style.icons}>
      <HomeIcon />
      <BorderColorIcon />
      <EmailIcon />
      <CircleNotificationsIcon />
      <BuildCircleIcon />
      <AccountCircleIcon />
    </div>
  )
}
