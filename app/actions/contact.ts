'use server'

const resendApiKey = process.env.RESEND_API_KEY
const defaultFromEmail = 'onboarding@resend.dev' // Default for unverified domains for testing
const companyEmail = 'info@thekitscompany.com' // Replace with verified domain email when in production

export async function sendGeneralContactEmail(formData: FormData) {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    if (!resendApiKey) {
        console.warn('Missing Resend API Key')
        return { success: false, error: 'Email service is not configured' }
    }

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: `Contact Form <${defaultFromEmail}>`,
                to: [companyEmail],
                reply_to: email,
                subject: `[Site Inquiry] ${subject} from ${firstName} ${lastName}`,
                html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            }),
        })

        if (!res.ok) {
            const errorData = await res.json()
            console.error('Resend Error:', errorData)
            return { success: false, error: 'Failed to send email' }
        }

        return { success: true }
    } catch (err) {
        console.error('Action Error:', err)
        return { success: false, error: 'Failed to send message' }
    }
}

export async function sendCompanyContactEmail(formData: FormData) {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const company = formData.get('company')
    const type = formData.get('type')
    const message = formData.get('message')

    if (!resendApiKey) {
        console.warn('Missing Resend API Key')
        return { success: false, error: 'Email service is not configured' }
    }

    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: `B2B Form <${defaultFromEmail}>`,
                to: [companyEmail],
                reply_to: email,
                subject: `[B2B Inquiry] ${type} from ${company} (${firstName} ${lastName})`,
                html: `
          <h3>New Company Contact Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${type}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
            }),
        })

        if (!res.ok) {
            const errorData = await res.json()
            console.error('Resend Error:', errorData)
            return { success: false, error: 'Failed to send email' }
        }

        return { success: true }
    } catch (err) {
        console.error('Action Error:', err)
        return { success: false, error: 'Failed to send message' }
    }
}
