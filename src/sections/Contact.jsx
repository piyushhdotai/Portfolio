import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Download, Mail } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { hobbies, profile } from '@/data/content'

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const fieldClass =
  'w-full rounded-lg bg-field px-3.5 py-3 text-sm text-paper placeholder:text-muted transition-shadow focus:outline-none focus:ring-2 focus:ring-orange disabled:opacity-60'

const formatList = (items) => `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const sending = status.type === 'sending'

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill in all fields before sending the message.' })
      return
    }
    if (!isValidEmail(email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setStatus({ type: 'sending', text: '' })
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus({ type: 'success', text: "Message sent! I'll get back to you soon." })
        setForm({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus({ type: 'error', text: 'Something went wrong while sending your message. Please try again.' })
      })
  }

  return (
    <section id="contact" className="pt-28 md:pt-36">
      <SectionHeading top="Let's work" bottom="Together" />

      <p className="reveal -mt-4 mb-10 max-w-lg leading-relaxed text-muted">
        Open to internships, freelance builds and hackathon teams. Got an idea worth working through? Drop a message.
        Away from the keyboard you&apos;ll find me at {formatList(hobbies)}.
      </p>

      <form noValidate onSubmit={handleSubmit} className="reveal flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-xs text-muted">
            Name
            <input
              className={fieldClass}
              value={form.name}
              onChange={update('name')}
              placeholder="Your name"
              autoComplete="name"
              disabled={sending}
            />
          </label>
          <label className="flex flex-col gap-2 text-xs text-muted">
            Email
            <input
              type="email"
              className={fieldClass}
              value={form.email}
              onChange={update('email')}
              placeholder="you@email.com"
              autoComplete="email"
              disabled={sending}
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-xs text-muted">
          Message
          <textarea
            rows={5}
            className={`${fieldClass} resize-y`}
            value={form.message}
            onChange={update('message')}
            placeholder="Tell me about your project"
            disabled={sending}
          />
        </label>

        <button
          type="submit"
          disabled={sending}
          className="rounded-lg bg-orange py-3 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-orange-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? 'Sending…' : 'Submit'}
        </button>

        <p role="status" aria-live="polite" className="min-h-5 text-sm">
          {status.type === 'error' && <span className="text-red-400">{status.text}</span>}
          {status.type === 'success' && <span className="text-lime">{status.text}</span>}
        </p>
      </form>

      <div className="reveal mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm text-white/85 transition-colors hover:bg-raised"
        >
          <Mail size={16} className="text-orange" /> {profile.email}
        </a>
        <a
          href={profile.resume}
          download="Piyush_Bajpai_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-surface px-4 py-2.5 text-sm text-white/85 transition-colors hover:bg-raised"
        >
          <Download size={16} className="text-orange" /> Download resume
        </a>
      </div>
    </section>
  )
}

export default Contact
