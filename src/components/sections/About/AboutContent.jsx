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
      I&apos;m a software developer based in Accra, Ghana. I focus on building fast, reliable, and user-centric web applications. With a strong foundation in modern frontend architecture and clean design, I love turning complex problems into clean, efficient code.
    </p>

    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
      When I&apos;m not coding, you can usually find me exploring new web tools, diving into UI design systems, or following tech trends.
    </p>

  </ScrollReveal>
)

export default AboutContent
