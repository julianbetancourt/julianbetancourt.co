import { GetServerSideProps } from "next"
import React, { useEffect } from "react"
import { getAccessToken, getLatestSongs } from "../lib/spotify"

export default function Spotify({ latestSong }) {
  // const [song]
  useEffect(() => {
    async function getSpotifyLastSong() {
      const spotify = await fetch("/api/spotify-last-song").then((r) =>
        r.json()
      )

      console.log({ spotify })
    }

    getSpotifyLastSong()
  }, [])
  const { track } = latestSong
  return (
    <svg>
      <foreignObject
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="130"
      >
        {/* @ts-ignore */}
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div
            className="main"
            style={{
              display: "flex",
            }}
          >
            <img src={track.album.images[1].url} height={130} width={130} />
            <div
              className="content"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div className="song" style={{}}>
                {track.name}
              </div>
              <div className="artist">{track.artists[0].name}</div>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = await getAccessToken()
  const songs = await getLatestSongs(access_token)

  console.log({ songs })
  return {
    props: {
      latestSong: songs.items[0],
    },
  }
}
