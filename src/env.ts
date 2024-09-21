import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data

// .flatten é um método que retorna um objeto com todos os erros de validação de uma forma mais legivel
// .fieldErrors é um objeto com todos os erros de validação
// zod é uma biblioteca de validação de tipos em typescript que permite validar objetos, strings, números, etc
