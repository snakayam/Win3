import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

class Footer extends React.Component {
  render() {
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>個人情報の取り扱い　　サイトマップ</p>
          <p
            style={{
              textAlign: "right",
              marginRight: "50px",
              marginTop: "-40px"
            }}
          >
            Copyright ©Hattori SG. 2022/1/24
          </p>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Footer;
