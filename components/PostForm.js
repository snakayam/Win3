// import React from "react"
// import { Container } from "@mui/material"
// import { Box } from "@mui/material"
// import style from "../styles/Layout.module.css"
// import Button from "@mui/material/Button"
// import Axios from 'axios'
// import { useState, useEffect } from "react"

// export default function PostForm() {
// const [title, setTitle] = useState()
// const [body, setBody ] = useState()
// const [file, setFile] = useState()

//   async function handleSubmit(e) {
//     e.preventDefault()
//     try{
//      const responce = await Axios.post('/post', {title, body,file,token:localStorage.getItem("Win3token")})
// navigate(`/SpecficPost/${responce.data}`)
//     }catch(e){
// console.log("There was a proble.")
//     }
//   }

//   return (
//     <Container maxWidth="sm" className={style.container}>
//       <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }} className={style.box}>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <input autoFocus type="text"onChange={e=>setTitle(e.target.value)} />
//           <input type="text" onChange={e=>setBody(e.target.value)} />
//           <input type="file" onChange={e=>setFile(e.target.value)}/>
//           <Button type="submit" variant="contained" sx={[{ mt: 3, mb: 2, bgcolor: "orange" }, { "&:hover": { bgcolor: "orange" } }]}>
//             投稿
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   )
// }

import React from "react"
import { useState } from "react"
import Axios from "axios"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Button from "@mui/material/Button"
import Input from "@mui/material/Input"

export default function PostForm() {
  const formData = new FormData()
  const [postData, setPostData] = useState({
    title: "",
    contents: ""
  })
  const [thum_img, setThum_Img] = useState(null)
  const { title, contents } = postData
  // const thum_img = thum_img
  // const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

  function onChange(e) {
    // e.preventDefault()
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  // function onChangeFile(e){
  //   const files = e.target.files
  //   image_url = createObjectURL(files[0])
  //   setThum_Img({thum_img:image_url})

  // }

  async function onSubmit(e) {
    e.preventDefault()
    formData.append('title', title)
    formData.append('contents', contents)
    formData.append('thum_img', thum_img)
    const res = await Axios.post(
      "api/post/contents/",
      // { postData },
      // { title, thum_img, contents },
      formData,
      // {
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // }
      {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}
    )
    console.log(res.data)
    // console.log({ title, thum_img, contents })
  }

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
      <div className="main9">
        <div className="jouhou">情報入力</div>
        {/* <div className="toukouBox">
        <Box
          sx={{
            width: 500,
            height: 320
          }}
        />
      </div> */}
        <div className="upload">
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => setThum_Img(e.target.files[0])} />
            {/* <Input accept="image/*" id="contained-button-file" name="thum_img" multiple type="file"  onChange={(e) => setImage(e.target.files[0])} /> */}
            {/* <Button variant="contained" component="span">
              Upload
            </Button> */}
          </label>
        </div>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          作品タイトル
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          {/* <TextField fullWidth label="作品タイトルを入力" id="fullWidth" /> */}
          <TextField fullWidth label="作品タイトルを入力" name="title" id="fullWidth" value={title} onChange={onChange} />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          キャプション
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="キャプションを入力" name="contents" id="fullWidth" value={contents} onChange={onChange} />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          タグ
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="タグを追加" id="fullWidth" />
        </Box>

        <div className="syurui">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">作品の種類</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="イラスト" />
              <FormControlLabel value="male" control={<Radio />} label="映像" />
              <FormControlLabel value="other" control={<Radio />} label="コード" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="seigen">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">閲覧制限</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="全年齢可" />
              <FormControlLabel value="male" control={<Radio />} label="R-18" />
              <FormControlLabel value="other" control={<Radio />} label="R-18G" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="hani">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">公開設定</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="公開" />
              <FormControlLabel value="male" control={<Radio />} label="非公開" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="seiteki">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">性的描写</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
              <FormControlLabel value="female" control={<Radio />} label="なし" />
              <FormControlLabel value="male" control={<Radio />} label="あり（軽度）" />
              <FormControlLabel value="other" control={<Radio />} label="あり（重度）" />
            </RadioGroup>
          </FormControl>

          <div className="toukouButton">
            <Button variant="contained" type="submit" disableElevation>
              作品を投稿
            </Button>
          </div>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </Box>
  )
}
