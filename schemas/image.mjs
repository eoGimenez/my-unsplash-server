import z from 'zod'

const imageSchema = z.object({
  label: z.string({
    invalid_type_error: 'Image label must be a string',
    required_error: 'Image label is required'
  }),
  imgUrl: z.string().url({
    invalid_type_error: 'Image URL must be a valid URL',
    required_error: 'Image URL is required'
  })
})

const validateImage = (object) => {
  return imageSchema.safeParse(object)
}

export { validateImage }
