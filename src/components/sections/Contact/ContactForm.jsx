/**
 * ContactForm.jsx
 *
 * Sends messages via EmailJS. Shows a success or error message
 * after submission so the user knows what happened.
 */

import { useState }                from 'react'
import { HiPaperAirplane }         from 'react-icons/hi'
import useForm                     from '../../../hooks/useForm'
import { validateContactForm }     from '../../../utils/validators'
import { sendContactEmail }        from '../../../api/contact'

const INITIAL_VALUES = { name: '', email: '', message: '' }

const ContactForm = () => {
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm(INITIAL_VALUES, validateContactForm)

  const onSubmit = handleSubmit(async (data) => {
    try {
      await sendContactEmail(data)
      reset()
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  })

  return (
    <form
      className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white/70 dark:bg-[#181818]/80 backdrop-blur-md p-6 sm:p-8 shadow-sm flex flex-col gap-5"
      onSubmit={onSubmit}
      noValidate
    >

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Kwame Mensah"
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 text-base focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-black/10 dark:border-white/10 focus:ring-[#1a6ef5] dark:focus:ring-[#4a8ff7]'
          }`}
          required
        />
        {errors.name && <span className="text-xs text-red-500 font-medium" role="alert">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
          Your Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="hello@example.com"
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 text-base focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-black/10 dark:border-white/10 focus:ring-[#1a6ef5] dark:focus:ring-[#4a8ff7]'
          }`}
          required
        />
        {errors.email && <span className="text-xs text-red-500 font-medium" role="alert">{errors.email}</span>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="I'd love to discuss a project with you…"
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 text-base focus:outline-none focus:ring-2 resize-y transition-all ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-black/10 dark:border-white/10 focus:ring-[#1a6ef5] dark:focus:ring-[#4a8ff7]'
          }`}
          required
        />
        {errors.message && <span className="text-xs text-red-500 font-medium" role="alert">{errors.message}</span>}
      </div>

      {/* Success / error feedback */}
      {status === 'success' && (
        <p className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">
          ✓ Message sent successfully! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium">
          Something went wrong. Please email me directly at <a href="mailto:agbocollins15@gmail.com" className="underline font-semibold">agbocollins15@gmail.com</a>
        </p>
      )}

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1a6ef5] hover:bg-[#1559cc] dark:bg-[#1a6ef5] dark:hover:bg-[#1559cc] !text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
        onClick={() => setStatus(null)}
      >
        <HiPaperAirplane size={18} aria-hidden="true" className="!text-white" />
        <span className="!text-white">{isSubmitting ? 'Sending…' : 'Send Message'}</span>
      </button>

    </form>
  )
}

export default ContactForm
