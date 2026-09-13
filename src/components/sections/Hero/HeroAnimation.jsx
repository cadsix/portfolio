/**
 * HeroAnimation.jsx
 *
 * The profile image with its decorative rotating gradient ring and
 * floating accent orbs. Isolated here so Hero.jsx stays focused on layout.
 */

import styles from './Hero.module.css'

const HeroAnimation = () => (
  <div className={`${styles.imageWrapper} desktop-image`}>
    <div className={styles.imageMask}>
      <img
        src="/images/me/standing.webp"
        alt="Collins Agbo"
        className={styles.profileImage}
        width={420}
        height={420}
        decoding="async"
        fetchPriority="high"
        loading="eager"
      />
    </div>

    {/* Floating accent orbs */}
    <span className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
    <span className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
    <span className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />
  </div>
)

export default HeroAnimation
