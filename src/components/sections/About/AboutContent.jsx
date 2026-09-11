/**
 * AboutContent.jsx
 *
 * Text column of the About section.
 */

import ScrollReveal from '../../ui/ScrollReveal'

const AboutContent = () => (
  <ScrollReveal direction="right" className="flex flex-col gap-6">

    <div>
      <span className="label">About Me</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight mt-2">
        Building software that solves real problems.
      </h2>
    </div>

    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
      I'm a software developer based in Accra, Ghana, building web applications with React, Next.js, and JavaScript.
      I've worked on healthcare platforms that automate patient care workflows across Africa, as well as e-commerce apps with localized payment integrations.
      I focus on writing clean, reliable code and delivering fast, accessible web experiences.
    </p>

  </ScrollReveal>
)

export default AboutContent
