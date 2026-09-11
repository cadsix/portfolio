/**
 * About.jsx
 *
 * Two-column section: workspace image on the left, AboutContent on the right.
 * Scroll-reveal animations are handled by the ScrollReveal wrapper component.
 */

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import AboutContent from './AboutContent'

const About = () => (
  <Section id="about">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* ── Image column ── */}
      <ScrollReveal direction="left" className="relative">
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-neutral-100 dark:bg-[#161616] group">
          <img
            src="/images/about/workspace.jpg"
            alt="Software developer coding workspace"
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={450}
          />
        </div>
      </ScrollReveal>

      {/* ── Text column ── */}
      <AboutContent />

    </div>
  </Section>
)

export default About
