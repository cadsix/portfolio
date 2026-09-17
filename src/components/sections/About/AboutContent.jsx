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
        Hi, I&apos;m Collins Agbo.
      </h2>
    </div>

    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
      I&apos;m a software engineer based in Ho, Ghana with hands-on experience building production web applications end-to-end — from responsive frontend interfaces to backend integrations and deployment.
    </p>

    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
      I focus on React, Next.js, Node.js, Supabase, and Firebase, with a proven ability to turn complex requirements into clean, scalable solutions — complemented by a working knowledge of UI/UX and graphic design.
    </p>

  </ScrollReveal>
)

export default AboutContent
