import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  error?: string
  email?: string
}

// In a real application, you would integrate with a service like:
// - Mailchimp
// - SendGrid
// - ConvertKit
// - Or your own database

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  try {
    // Here you would typically:
    // 1. Store the email in your database
    // 2. Send a confirmation email
    // 3. Add to your mailing list service
    
    // For now, we'll just simulate success
    console.log(`New signup: ${email}`)
    
    // Simulate async operation
    setTimeout(() => {
      console.log(`Email signup processed for: ${email}`)
    }, 1000)

    res.status(200).json({ 
      message: 'Successfully signed up for updates!',
      email: email 
    })
  } catch (error) {
    console.error('Signup error:', error)
    res.status(500).json({ error: 'Internal server error. Please try again later.' })
  }
}
