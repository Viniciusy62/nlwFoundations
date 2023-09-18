import cors from 'cors'
import express from 'express'

import { download } from './download.js'

const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => { 
  download(request.params.id) 
  const result = transcribe()

  response.json({ result }) 
})

app.listen(3333, () => console.log("Server is running in port 3333"))
