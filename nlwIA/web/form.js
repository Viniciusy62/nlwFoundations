import { server } from './server'

const form = document.querySelector('#form');
const input = document.querySelector('#url');
const content = document.querySelector('#content');

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const videoURL = url.value

  if(!videoURL.includes("shorts")) {
    return content.textContent = "Esse vídeo não é um short"
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do áudio..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = transcription.data.result
})