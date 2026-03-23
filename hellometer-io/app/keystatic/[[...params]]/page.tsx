import { notFound } from 'next/navigation'

export default function KeystaticPage() {
  if (process.env.NODE_ENV === 'production') notFound()
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { default: KeystaticApp } = require('../keystatic-app')
  return <KeystaticApp />
}
