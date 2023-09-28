import express from 'express'
import bcrypt from 'bcrypt'
import { Image } from '../models/image.model.mjs'
import { fileUploader } from '../config/cloudinary.config.mjs'

const router = express.Router()

const saltRounds = 10

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
  console.log(req.body)
  const { label, imgUrl } = req.body
  Image.create({
    label,
    imgUrl
  })
    .then((response) => {
      res.status(201).json({ result: 'Created!', post: response })
    })
    .catch((err) => next(err))
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
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
