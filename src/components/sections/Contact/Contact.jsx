/**
 * Contact.jsx
 *
 * Contact section shell: section header + two-column layout
 * (ContactInfo on the left, ContactForm on the right).
 */

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import ContactInfo  from './ContactInfo'
import ContactForm  from './ContactForm'

const Contact = () => (
  <Section id="contact">

    {/* ── Header ── */}
    <ScrollReveal>
      <div className="text-center mb-12">
        <span className="label">Contact</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
          Have a project in mind? Let&apos;s talk.
        </h2>
      </div>
    </ScrollReveal>

    {/* ── Two-column layout ── */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <ScrollReveal direction="left" className="lg:col-span-5">
        <ContactInfo />
      </ScrollReveal>

      <ScrollReveal direction="right" className="lg:col-span-7">
        <ContactForm />
      </ScrollReveal>
    </div>

  </Section>
)

export default Contact
