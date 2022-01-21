import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default function Footer(){
    return (
      <div className="footer">
        <div className="footer-nakami">
          　　<h1>Win-3</h1>
          <div className="icons3">
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <br></br>
       
          <p>個人情報の取り扱い　　サイトマップ</p>
          <p
            style={{
              textAlign: "right",
              marginRight: "50px",
              marginTop: "-40px"
            }}
          >
            Copyright ©Hattori SG. 2021/12/10
          </p>
          <br></br>
        </div>
      </div>
    );
  }



