import { transcriptionExample } from "./utils/transcription.js"

export async function transcribe(audio) {
  try {
    // return transcriptionExample
   
    console.log("Realizando a transcrição...")
   
    const transcribe = await pipeline(
      "automatic-speech-recognition", //reconhecimento de fala
      "Xenova/whisper-small") //modelo de IA

    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe", //tarefa de fazer a transcrição
    })

    console.log("Transcrição finalizada com sucesso.")
    
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
  
  // definindo modelo de IA para transcrição e incluindo 'trycatch'