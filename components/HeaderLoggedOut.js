import Button from "@mui/material/Button"
import NextLink from "next/link"
import { Link as MuiLink } from "@material-ui/core"
import style from "../styles/Header.module.css"


export default function HeaderLoggedOut(props) {
  function handleLoggedIn(e) {
    e.preventDefault()
    props.setLoggedIn(true)
  }
  return (
    <div className={style.icons}>
      <Button variant="outlined" color="inherit" onClick={handleLoggedIn}>
        <NextLink href="/SignIn">
          <MuiLink style={{ color: "white", textDecoration: "none" }}>ログイン</MuiLink>
        </NextLink>
      </Button>
    </div>
  )
}