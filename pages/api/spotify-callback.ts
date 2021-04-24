import type { NextApiRequest, NextApiResponse } from "next"

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
  console.log(req.query)
  try {
    const spotifyRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: "http://localhost:3000/api/spotify-callback",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
    }).then((r) => r.json())
    console.log({ spotifyRes })

    const playlistRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: {
          authorization: `Bearer ${spotifyRes.access_token}`,
        },
      }
    ).then((r) => r.json())

    console.log({ playlistRes })
  } catch (err) {
    console.log("ERR!", err)
  }

  res.status(200).json({ hello: "hi!" })
}
