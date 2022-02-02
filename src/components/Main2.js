import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArticleIcon from "@mui/icons-material/Article";

class Main2 extends React.Component {
  render() {
    return (
      <div className="main2">
        <hr style={{ width: "1350px", size: "100px", noshade: "" }}></hr>
        <div className="post">
          <div className="toukou">投稿</div>
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
          <hr style={{ width: "1350px", size: "100px", noshade: "" }}></hr>
          <div className="juchuu">受注実績</div>
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
        </ul>
      </div>
    );
  }
}

export default Main2;
