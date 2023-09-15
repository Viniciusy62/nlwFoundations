import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => {
  const videoURL = 'https://www.youtube.com/shorts/' + videoId
  console.log('Realizando o download do vídeo:', videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
  .on("info",
  (info) => {
    // console.log(info)
    }
  )
}