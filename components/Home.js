import React from "react"
import News from "./News"
import LatestPosts from "./LatestPosts"
import Videos from "./Videos"
import Codes from "./Codes"
import Swiper from "./Swiper"

//コメントアウト　　　　　　{/*  コメント　　　　　　*/}
//プロフィール画面 ：Header+Main1+Main2+Footer
//作品閲覧画面    ：Header+Main3+Main4+Footer
//ホーム画面      ：Header+Swiper+Main5+Main6+Main7+Main8+Footer
//作品投稿画面    :Header+Main9+Footer
//プロフィール設定画面:Header+Main10+Footer

export default function Home() {
  return (
    <div>
      <Swiper />
      <News />
      <LatestPosts />
      <Videos />
      <Codes />
    </div>
  )
}
