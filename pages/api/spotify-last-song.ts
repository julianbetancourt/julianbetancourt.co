import type { NextApiRequest, NextApiResponse } from "next"
import { getAccessToken, getLatestSongs } from "../../lib/spotify"

type NextApiRequestWithSpotify = NextApiRequest & {
  query: {
    code: string
    state: string
  }
}

export default async function handler(
  req: NextApiRequestWithSpotify,
  res: NextApiResponse
) {
  const { access_token } = await getAccessToken()
  console.log({ access_token })
  const songs = await getLatestSongs(access_token)
  console.log({ songs })
  const svg = `<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg> `
  res.send(svg)
  // const redirectUrl =
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000/api/spotify-callback"
  //     : "https://julianbetancourt.co/api/spotify-callback"

  // const url = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20user-read-recently-played&state=34fFs29kd09`
  // // res.redirect(url)
  // // const spotifyRes = await fetch(url)

  // // console.log({ res: spotifyRes })

  // res.status(200).json({ uri: url })
}
