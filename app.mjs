import express from 'express'
import { router as userRoutes } from './routes/user.routes.mjs'
import('./db/index.mjs')

const app = express()

import('./config/index.mjs')

app.use('/api', userRoutes)

export { app }
