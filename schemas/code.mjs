import z from 'zod'

const codeShcema = z.object({
  userCode: z.string({
    invalid_type_error: 'User code must be a string',
    required_error: 'User code is required'
  })
})

const validateCode = (userCode) => {
  return codeShcema.safeParse(userCode)
}

export { validateCode }
