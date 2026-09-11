import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/About.css'

const About = () => {
  const imageRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div ref={imageRef} className="about-image reveal-left">
          <img
            src="/images/about/workspace.jpg"
            alt="Product design and frontend engineering workspace"
            className="workspace-image"
          />
        </div>

        <div ref={contentRef} className="about-content reveal-right">
          <h2 className="about-title">
            <span className="about-label">ABOUT ME</span>
            Building software that solves real problems.
          </h2>

          <p className="about-description">
            I'm a software developer based in Accra, Ghana, building web applications with React, Next.js, and JavaScript.
            I've worked on healthcare platforms that automate patient care workflows across Africa, as well as e-commerce apps with localized payment integrations.
            I focus on writing clean, reliable code and delivering fast, accessible web experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
