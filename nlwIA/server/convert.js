import fs from 'fs'; //Manipular arquivos nos diretórios
import wav from 'node-wav'; //Converter para este formato
import ffmpeg from 'fluent-ffmpeg'; //Manipular o áudio
import ffmpegStatic from 'ffmpeg-static'; //Serve para apontar para qual biblioteca "mpeg" será utilizada
// import { resolve } from 'path';

const filePath = "./tmp/audio.mp4"
const outputPath = filePath.replace(".mp4", ".wav")

export const convert = () => 
  new Promise((resolve, reject) => {
    console.log("Convertendo o vídeo...")

    ffmpeg.setFfmpegPath(ffmpegStatic)
    ffmpeg()
      .input(filePath)
      .audioFrequency(16000)
      .audioChannels(1)
      .format("wav")
      .on("end", () => {
        const file = fs.readFileSync(outputPath) //ler o arquivo
        const fileDecoded = wav.decode(file) //decodifica o arquivo, transforma o áudio em código

        const audioData = fileDecoded.channelData[0] //Pegar os dados
        const floatArray = new Float32Array(audioData)

        console.log("Vídeo convertido com sucesso!")

        resolve(floatArray)
        fs.unlinkSync(outputPath) //deleta o arquivo após o processo
    })
    .on("error", (error) => {
        console.log("Erro ao converter o vídeo", error)
        reject(error)
    })
    .save(outputPath)
  })