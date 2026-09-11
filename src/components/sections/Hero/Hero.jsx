/**
 * Hero.jsx
 *
 * Full-screen landing section. Entrance animations are CSS-driven
 * (staggered animation-delay). The typewriter effect is handled by
 * the Typewriter UI component.
 */

import { HiDownload, HiLocationMarker } from 'react-icons/hi'

import Section       from '../../common/Section'
import Button        from '../../common/Button'
import Typewriter    from '../../ui/Typewriter'
import SocialLinks   from '../SocialLinks'
import TechStack     from '../TechStack'
import HeroAnimation from './HeroAnimation'
import { trackEvent } from '../../../utils/helpers'
import styles        from './Hero.module.css'

// Hero typewriter intro text
const INTRO_TEXT =
  "Hi, I'm Collins Agbo — a Software Developer based in Accra, Ghana. " +
  'I build responsive web applications, reliable digital products, and clean user interfaces.'

const Hero = () => (
  <Section className={styles.section}>
    <div className={styles.inner}>

      {/* ── Text content ── */}
      <div className={styles.content}>

        <h1 className={styles.title}>
          Software Developer
        </h1>

        {/* Mobile image — shown between title and subtitle on small screens */}
        <div className={`${styles.imageWrapper} ${styles.mobileImage}`}>
          <img
            src="/images/me/me.png"
            alt="Collins Agbo"
            className={styles.profileImage}
            width={200}
            height={200}
          />
        </div>

        <p className={styles.subtitle}>
          <Typewriter text={INTRO_TEXT} speed={36} />
        </p>

        <div className={styles.location}>
          <HiLocationMarker className={styles.locationPin} aria-hidden="true" />
          Accra, Ghana
        </div>

        <SocialLinks />
        <TechStack />

        <div className={styles.cta}>
          <Button
            href="/cv/updatedcv.pdf"
            download="Collins_Agbo_CV.pdf"
            size="lg"
            onClick={() =>
              trackEvent('cv_download', {
                event_category: 'engagement',
                event_label: 'CV Download',
              })
            }
          >
            <HiDownload size={18} aria-hidden="true" />
            Download CV
          </Button>
        </div>
      </div>

      {/* ── Desktop profile image ── */}
      <HeroAnimation />

    </div>
  </Section>
)

export default Hero
