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
  const songs = await getLatestSongs(access_token)
  res.status(200).send(`<a href="" color="green">hello</a>`)
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
