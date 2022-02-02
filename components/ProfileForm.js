import React from "react"
import { useState } from "react"
import Axios from "axios"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import Stack from "@mui/material/Stack"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import Selector from "./Selector"

const Input = styled("input")({
  display: "none"
})

export default function ProfileForm() {
  const formData = new FormData()
  const [img, setImg] = useState(null)
  const [profile, setProfile] = useState({
    nickName: "",
    userPro: ""
  })
  const token = localStorage.getItem("response")


  const { nickName, userPro } = profile

  function onChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  async function onSubmit(e) {
    e.preventDefault()
    formData.append("nickName", nickName)
    formData.append("userPro", userPro)
    formData.append("img", img)
    await Axios.post("/api/user/profile/", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Token " + token
      }
    })
  }

  return (
    <div className="main9">
      <div className="jouhou">プロフィール設定</div>
      <br></br>
      <div className="profBox">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7]
            }
          }}
        />
      </div>
      <Box component="form" onSubmit={onSubmit}>
        <div className="upload">
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" name="img" onChange={(e) => setImg(e.target.files[0])} />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </div>
        <br></br>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          ペンネーム
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="ペンネームを入力" id="fullWidth" name="nickName" onChange={onChange} value={nickName} />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          userPro
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="userPro" id="fullWidth" name="userPro" onChange={onChange} value={userPro} />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          ポートフォリオ
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="ポートフォリオURLを入力" id="fullWidth" />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          Twitter
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="Twitter IDを入力" id="fullWidth" />
        </Box>
        　　　　　
        <Selector />
        <div className="profKousin">
          <Button type="submit" variant="contained" disableElevation>
            プロフィールを更新
          </Button>
        </div>
        <br></br>
      </Box>
    </div>
  )
}
