import {getTest} from "./service.js"
import express from "express";

const app = express()
const port = 3007

app.get('/test', (req, res) => {
  const response  = getTest();
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})