'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type DemoFormState = {
  success: boolean
  error?: string
} | null

export async function submitDemoRequest(
  _prevState: DemoFormState,
  formData: FormData
): Promise<DemoFormState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const company = formData.get('company')?.toString().trim()
  const phone = formData.get('phone')?.toString().trim()
  const locations = formData.get('locations')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !email || !company) {
    return { success: false, error: 'Name, email, and company are required.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  try {
    await resend.emails.send({
      from: 'Hellometer Demo <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Demo request: ${company} (${name})`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        phone ? `Phone: ${phone}` : null,
        locations ? `Number of Locations: ${locations}` : null,
        message ? `\nMessage:\n${message}` : null,
      ].filter(Boolean).join('\n'),
    })

    return { success: true }
  } catch {
    return { success: false, error: 'Failed to submit request. Please try again later.' }
  }
}
