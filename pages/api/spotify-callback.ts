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
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://julianbetancourt.co"
  try {
    const spotifyRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: `${baseUrl}/api/spotify-callback`,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
    }).then((r) => r.json())
    console.log({
      spotifyRes,
      clientId: process.env.SPOTIFY_CLIENT_ID,
      s: process.env.SPOTIFY_CLIENT_SECRET,
    })
  } catch (err) {
    console.log("ERR!", err)
  }

  res.status(200).json({ hello: "hi!" })
}
