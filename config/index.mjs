import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const FRONTEND_URL = process.env.ORIGIN_LOCAL

export const app = (app) => {
  app.set('trust proxy', 1)
  app.use(
    cors({
      credentials: true,
      origin: [FRONTEND_URL]
    })
  )
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
}

