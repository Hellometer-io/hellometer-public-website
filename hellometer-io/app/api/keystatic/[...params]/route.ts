import { makeRouteHandler } from '@keystatic/next/route-handler'
import { NextResponse } from 'next/server'
import keystaticConfig from '@/keystatic.config'

const handler = process.env.NODE_ENV === 'production'
  ? { GET: () => NextResponse.json({ error: 'Not found' }, { status: 404 }), POST: () => NextResponse.json({ error: 'Not found' }, { status: 404 }) }
  : makeRouteHandler({ config: keystaticConfig })

export const { POST, GET } = handler
