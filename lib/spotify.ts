export async function getAccessToken() {
  return await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  }).then((r) => r.json())
}

export async function getLatestSongs(access_token) {
  return await fetch("https://api.spotify.com/v1/me/player/recently-played", {
    headers: {
      authorization: `Bearer ${access_token}`,
    },
  }).then((r) => r.json())
}
