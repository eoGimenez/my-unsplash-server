import express from 'express'
import { router as userRoutes } from './routes/user.routes.mjs'
import { app as configureApp } from './config/index.mjs'
import('./db/index.mjs')

const app = express()
app.disable('x-powered-by')

configureApp(app)

app.use('/api', userRoutes)

export { app }
