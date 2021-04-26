import type { NextApiRequest, NextApiResponse } from "next"
import imageToBase64 from "image-to-base64"
import { getAccessToken, getLatestSongs } from "../../lib/spotify"

const getSvg = (track, albumImage) => `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" height="130" version="1.1">
<foreignObject
  xmlns="http://www.w3.org/2000/svg"
  width="480"
  height="130"
>
<style>
* {
  font-family: "Courier new";
}
  .main {
    display: flex;
    
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    background: black;
  }

  .song-details {
    margin-bottom: 42px;
    color: white;
    text-align: center;
  }

  .container {
      position: absolute;
      bottom: 0;
      left: 45%;
  }
  .container span {
    display: block;
    bottom: 0px;
    width: 2px;
    height: 8px;
    background: #1DB954;
    position: absolute;
    -webkit-animation: audio-wave 2s infinite ease-in-out;
            animation: audio-wave 2s infinite ease-in-out;
  }
  .container span:nth-child(1) {
    left: 6px;
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  .container span:nth-child(2) {
    left: 12px;
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  .container span:nth-child(3) {
    left: 18px;
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  .container span:nth-child(4) {
    left: 24px;
    -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
  }
  .container span:nth-child(5) {
    left: 30px;
    -webkit-animation-delay: 1.5s;
            animation-delay: 1.5s;
  }
  .container span:nth-child(6) {
    left: 36px;
    -webkit-animation-delay: 1.8s;
            animation-delay: 1.8s;
  }
  .container span:nth-child(7) {
    left: 42px;
    -webkit-animation-delay: 2.1s;
            animation-delay: 2.1s;
  }
  .container span:nth-child(8) {
    left: 48px;
    -webkit-animation-delay: 2.4s;
            animation-delay: 2.4s;
  }
  .container span:nth-child(9) {
    left: 54px;
    -webkit-animation-delay: 2.7s;
            animation-delay: 2.7s;
  }
  .container span:nth-child(10) {
    left: 60px;
    -webkit-animation-delay: 3s;
            animation-delay: 3s;
  }
  .container span:nth-child(11) {
    left: 66px;
    -webkit-animation-delay: 3.3s;
            animation-delay: 3.3s;
  }
  .container span:nth-child(12) {
    left: 72px;
    -webkit-animation-delay: 3.6s;
            animation-delay: 3.6s;
  }
  .container span:nth-child(13) {
    left: 78px;
    -webkit-animation-delay: 3.9s;
            animation-delay: 3.9s;
  }
  .container span:nth-child(14) {
    left: 84px;
    -webkit-animation-delay: 4.2s;
            animation-delay: 4.2s;
  }
  .container span:nth-child(15) {
    left: 90px;
    -webkit-animation-delay: 4.5s;
            animation-delay: 4.5s;
  }
  .container span:nth-child(16) {
    left: 96px;
    -webkit-animation-delay: 4.8s;
            animation-delay: 4.8s;
  }
  .container span:nth-child(17) {
    left: 102px;
    -webkit-animation-delay: 5.1s;
            animation-delay: 5.1s;
  }
  .container span:nth-child(18) {
    left: 108px;
    -webkit-animation-delay: 5.399999999999999s;
            animation-delay: 5.399999999999999s;
  }
  .container span:nth-child(19) {
    left: 114px;
    -webkit-animation-delay: 5.7s;
            animation-delay: 5.7s;
  }
  .container span:nth-child(20) {
    left: 120px;
    -webkit-animation-delay: 6s;
            animation-delay: 6s;
  }
  .container span:nth-child(21) {
    left: 126px;
    -webkit-animation-delay: 6.3s;
            animation-delay: 6.3s;
  }
  .container span:nth-child(22) {
    left: 132px;
    -webkit-animation-delay: 6.6s;
            animation-delay: 6.6s;
  }
  .container span:nth-child(23) {
    left: 138px;
    -webkit-animation-delay: 6.899999999999999s;
            animation-delay: 6.899999999999999s;
  }
  .container span:nth-child(24) {
    left: 144px;
    -webkit-animation-delay: 7.199999999999999s;
            animation-delay: 7.199999999999999s;
  }
  .container span:nth-child(25) {
    left: 150px;
    -webkit-animation-delay: 7.5s;
            animation-delay: 7.5s;
  }
  .container span:nth-child(26) {
    left: 156px;
    -webkit-animation-delay: 7.8s;
            animation-delay: 7.8s;
  }
  .container span:nth-child(27) {
    left: 162px;
    -webkit-animation-delay: 8.1s;
            animation-delay: 8.1s;
  }
  .container span:nth-child(28) {
    left: 168px;
    -webkit-animation-delay: 8.4s;
            animation-delay: 8.4s;
  }
  .container span:nth-child(29) {
    left: 174px;
    -webkit-animation-delay: 8.7s;
            animation-delay: 8.7s;
  }
  .container span:nth-child(30) {
    left: 180px;
    -webkit-animation-delay: 9s;
            animation-delay: 9s;
  }
  @-webkit-keyframes audio-wave {
    0% {
      height: 15px;
      transform: translateY(0px);
    }
    25% {
      height: 60px;
      transform: translateY(20px);
    }
    50% {
      height: 15px;
      transform: translateY(0px);
    }
    100% {
      height: 10px;
      transform: translateY(0px);
    }
  }
  @keyframes audio-wave {
    0% {
      height: 13px;
      transform: translateY(0px);
    }
    25% {
      height: 57px;
      transform: translateY(20px);
    }
    50% {
      height: 13px;
      transform: translateY(0px);
    }
    100% {
      height: 8px;
      transform: translateY(0px);
    }
  }

  
</style>
  <div xmlns="http://www.w3.org/1999/xhtml">
    <div
      class="main"
      
    >
      <img src="data:image/png;base64, ${albumImage}" height="130" width="130" />
      <div
        class="content"          
      >
        <div class="song-details">
          <div class="song" color="green">
            ${track.name}
          </div>
          <div class="artist">${track.artists[0].name}</div>
        </div>
        <div class="container"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
</foreignObject>
</svg>
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { access_token } = await getAccessToken()
  const songs = await getLatestSongs(access_token)
  const { track } = songs.items[0]

  const image = await imageToBase64(track.album.images[1].url).then(
    (resp) => resp
  )
  const svg = getSvg(track, image)

  res.setHeader("Content-Type", "image/svg+xml")

  res.send(svg)
}
