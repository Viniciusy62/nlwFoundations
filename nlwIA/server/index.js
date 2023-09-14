import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.get('/summary', (request, response) => {
  response.send("Server running")
})

app.listen(3333, () => console.log("Server is running in port 3333"))