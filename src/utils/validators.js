/**
 * validators.js
 * Pure validation functions used by useForm and ContactForm.
 * Each function returns an error string on failure, or an empty string on pass.
 */

/**
 * Validates a contact form values object.
 * @param {{ name: string, email: string, message: string }} values
 * @returns {object} errors — empty object means the form is valid.
 */
export const validateContactForm = (values = {}) => {
  const { name = '', email = '', message = '' } = values || {}
  const errors = {}

  const trimmedName = String(name || '').trim()
  const trimmedEmail = String(email || '').trim()
  const trimmedMessage = String(message || '').trim()

  if (!trimmedName) {
    errors.name = 'Name is required.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!trimmedEmail) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!trimmedMessage) {
    errors.message = 'Message is required.'
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

/**
 * Checks if a value is a non-empty string.
 * @param {string} value
 * @returns {boolean}
 */
export const isNonEmpty = (value) => typeof value === 'string' && value.trim().length > 0

/**
 * Validates an email address format.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
