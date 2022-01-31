import React from "react"
import Button from "@material-ui/core/Button"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ArticleIcon from "@mui/icons-material/Article"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ArticleIcon from "@mui/icons-material/Article";

export default function SinglePost() {
  return (
    <>
      <div className="main3">
        <div className="prof-left">
          <div className="box box6">picture</div>
        </div>
        <ul className="task prof-right">
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

      <div className="main2">
        <hr style={{ width: "1350px", size: "100px", noshade: "" }}></hr>
        <div className="post">
          <div className="toukou">関連作品</div>
          <p className="sort">絞り込み▼：　今月</p>
          <div class="wrap">
            <div class="box box1">
              task1
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box2">
              task2
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box3">
              task3
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box4">
              task4
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box5">
              task5
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <ul className="achieve">
          <div class="wrap">
            <div class="box box1">
              task1
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box2">
              task2
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box3">
              task3
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box4">
              task4
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
            <div class="box box5">
              task5
              <div className="icons2">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
            </div>
          </div>
          <br></br>
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const postsData = Axios.get("/api/posts/", {thum_img, title, contents})
  return{
    props:{
      postsData
    }
  }

}