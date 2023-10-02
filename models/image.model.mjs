import { Schema, model } from 'mongoose'

const imageSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Image = model('Image', imageSchema)

// export { Image }
