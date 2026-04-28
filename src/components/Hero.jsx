import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import TechStack from './TechStack'
import SocialLinks from './SocialLinks'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Front-End React<br />
          Developer 👋
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
          Hi, I'm Collins Agbo. A passionate Front-end React<br className="desktop-br" />
          Developer based in Accra, Ghana.
        </p>
        <div className="hero-location">
          <HiLocationMarker className="location-pin" />
          Accra, Ghana
        </div>
        
        <SocialLinks />
        <TechStack />
        
        <a href="/cv/updatedcv.pdf" download="Collins_Agbo_CV.pdf" className="download-cv-btn">
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