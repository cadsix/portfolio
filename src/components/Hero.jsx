import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import TechStack from './TechStack'
import SocialLinks from './SocialLinks'
import '../styles/Hero.css'

const TYPEWRITER_TEXT = "Hi, I'm Collins Agbo — a Software Developer based in Accra, Ghana. I build responsive web applications, reliable digital products, and clean user interfaces."

const Hero = () => {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < TYPEWRITER_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + TYPEWRITER_TEXT[index])
        setIndex((prev) => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Software Developer
          </h1>

        {/* Mobile image - shows between title and subtitle */}
        <div className="hero-image mobile-image">
          <img
            src="/images/profile.jpeg?v=2"
            alt="Collins Agbo"
            className="profile-image"
          />
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>

        <p className="hero-subtitle">
          {displayed}<span className="typewriter-cursor">|</span>
        </p>

        <div className="hero-location">
          <HiLocationMarker className="location-pin" />
          Accra, Ghana
        </div>

        <SocialLinks />
        <TechStack />

        <a
          href="/cv/updatedcv.pdf"
          download="Collins_Agbo_CV.pdf"
          className="download-cv-btn"
          onClick={() => {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'cv_download', {
                event_category: 'engagement',
                event_label: 'CV Download'
              })
            }
          }}
        >
          <HiDownload size={18} />
          Download CV
        </a>
      </div>

      {/* Desktop image - shows on the right side */}
      <div className="hero-image desktop-image">
        <img
          src="/images/profile.jpeg?v=2"
          alt="Collins Agbo"
          className="profile-image"
        />
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </main>
  )
}

export default Hero
