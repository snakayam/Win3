import React from "react"
import Button from "@material-ui/core/Button"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ArticleIcon from "@mui/icons-material/Article"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

export default function MainPost() {
  return (
    <div className="main3">
      <div className="prof-left">
        <div class="box box6">picture</div>
      </div>
      <ul className="task">
        <div style={{ fontSize: "40px" }}>Summer sea</div>
        <div className="icons4">
          <FavoriteBorderIcon />
          <ArticleIcon />
        </div>
        <Button color="primary" variant="contained">
          by Ayataka0203
        </Button>
        <p>作品解説</p>
      </ul>
    </div>
  )
}
