export type FormValues = {
  username: string
  mailAddress: string
  password: string
}

export type FormError = { [P in keyof FormValues]?: string }
