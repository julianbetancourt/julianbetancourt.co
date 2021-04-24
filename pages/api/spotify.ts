import { getAccessToken } from "../../lib/spotify"

export async function handler(req, res) {
  const redirectUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/spotify-callback"
      : "https://julianbetancourt.co/api/spotify-callback"

  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20user-read-recently-played&state=34fFs29kd09`
  res.send("hello")
  // res.redirect(url)
  // // const spotifyRes = await fetch(url)

  // // console.log({ res: spotifyRes })

  // res.status(200).json({ uri: url })
}
