import Button from "@mui/material/Button"
import  Link  from "next/link"
import { Link as MuiLink } from "@material-ui/core"
import style from "../styles/Header.module.css"
import Axios from "axios"


export default function HeaderLoggedOut() {
  return (
    <>
      <Button variant="outlined" color="inherit">
        <Link href="/SignIn">
          <MuiLink style={{ color: "white", textDecoration: "none" }}>ログイン</MuiLink>
        </Link>
      </Button>

    
    </>
  )
}

  // function handleLoggedIn(e) {
  //   e.preventDefault()
    // try {
    //   const response = await Axios.post("")
    //   if(responce.data){
    //     localStorage.setItem("Win3Token", response.data.token)
    //     localStorage.setItem("Win3username", response.data.username)
    //     localStorage.setItem("Win3avatar", response.data.avatar)
    //     props.setLoggedIn(true)
    //   }else{
    //     console.log("Incorrect username / password.")
    //   }
    // } catch(e){

    // }
    // props.setLoggedIn(true)
  // }
