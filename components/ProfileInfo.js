import React from "react";
import Button from "@material-ui/core/Button";

export default function ProfileInfo(){

    return (
      <div className="main1">
        <div className="prof-left">
          <div class="box box0">prof</div>
        </div>
        <ul className="prof-right">
          <div style={{ fontSize: "40px" }}>Ayataka0203</div>
          <Button color="primary" variant="contained">
            メンター
          </Button>
          <Button color="primary" variant="contained">
            プロフィールを編集
          </Button>
          <p>投稿１件　受注２件　満了２件　フォロー１４人　フォロワー１０人</p>
        </ul>
      </div>
    );

}


