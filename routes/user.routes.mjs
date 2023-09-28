import express from 'express'
import bcrypt from 'bcrypt'
import { Image } from '../models/image.model.mjs'
import { fileUploader } from '../config/cloudinary.config.mjs'

const router = express.Router()

const saltRounds = 10

router.get('/', (req, res, next) => {
  Image.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => next(err))
})

router.get('/aa', (req, res, next) => {
  res.send('<h1>aa hola</h1>')
})

router.post('/upload', fileUploader.single('image'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded! check the extentions'))
  }

  req.status(201).json({ label: req.file.filename, imgUrl: req.file.path })
})

export { router }
