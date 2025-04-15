import React from 'react'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: '20kb'})) //accepting json files
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))
export default function app() {
  return (
    <div>app</div>
  )
}
