import express from 'express'
import bcrypt from 'bcrypt'
import { Image } from '../models/image.model.mjs'
import { fileUploader } from '../config/cloudinary.config.mjs'
import { validateImage, validatePartialImage } from '../schemas/image.mjs'
import { validateCode } from '../schemas/code.mjs'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()

const USER_CODE = process.env.USER_CODE

router.get('/', (req, res, next) => {
  // Pensar si vale la pena este filtro
  /*   const { label } = req.query
  if (label) {
    Image.findOne({ label })
      .then((response) => {
        res.status(200).json(response)
      })
      .catch((err) => next(err))
  } */
  Image.find()
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => next(err))
})

router.post('/', (req, res, next) => {
  const result = validateImage(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  Image.create({
    ...result.data
  })
    .then((response) => {
      res.status(201).json({ result: 'Created!', post: response })
    })
    .catch((err) => next(err))
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const result = validatePartialImage(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }
  Image.findByIdAndUpdate(id, { ...result.data }, { new: true })
    .then((response) => {
      res.status(201).json({ result: 'Updated', post: response })
    })
    .catch((err) => next(err))
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  const result = validateCode(req.body)
  if (!bcrypt.compareSync(result.data.userCode, USER_CODE)) {
    return res.status(403).json({ error: 'Your user code is not correct !' })
  }

  Image.findByIdAndDelete(id)
    .then((response) => {
      res.status(204).json({ response: 'ok' })
    })
    .catch((err) => next(err))
})

router.post('/upload', fileUploader.single('image'), (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded! check the extentions'))
  }
  req.status(201).json({ imgUrl: req.file.path })
})
export { router }
