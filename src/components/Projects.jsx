import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/Projects.css'

const Projects = () => {
  const headerRef = useScrollReveal()
  const card1Ref = useScrollReveal()
  const card2Ref = useScrollReveal()
  const card3Ref = useScrollReveal()
  const card4Ref = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div ref={headerRef} className="projects-header reveal">
          <span className="projects-label">PROJECTS</span>
          <h2 className="projects-title">
            Featured work &amp; personal projects.
          </h2>
        </div>

        {/* Card 1 - DriveEase */}
        <div ref={card1Ref} className="project-card reveal">
          <div className="project-image">
            <a href="https://collins-car-rentals.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT1.png" 
                alt="DriveEase Car Rental Web App" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">DRIVEEASE — CAR RENTAL APP</h3>
            <p className="project-description">
              A responsive car rental web app with real-time vehicle filtering, pricing estimation, dynamic availability lookup, and a multi-step booking checkout flow.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">SCSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/cadsix/car-rental-website" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://collins-car-rentals.netlify.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 - Perform Triathlon */}
        <div ref={card2Ref} className="project-card reverse reveal">
          <div className="project-image">
            <a href="https://triathlon-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT4.png" 
                alt="Perform Triathlon Coaching" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">PERFORM — TRIATHLON COACHING</h3>
            <p className="project-description">
              A modern triathlon coaching website built for endurance athletes, featuring structured training packages, interactive pricing tiers, and clean responsive layouts.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">CSS Modules</span>
              <span className="tech-tag">Responsive UI</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/cadsix/triathlon" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://triathlon-zeta.vercel.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 - Aura Storefront */}
        <div ref={card3Ref} className="project-card reveal">
          <div className="project-image">
            <a href="https://collinsecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT2.png" 
                alt="Aura Storefront Platform" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">AURA — MINIMALIST STOREFRONT</h3>
            <p className="project-description">
              A lightweight e-commerce storefront with real-time product filtering, a slide-out cart drawer, persistent state management, and an efficient checkout flow.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">State Management</span>
              <span className="tech-tag">CSS</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/cadsix/basic-eCommerce/" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://collinsecommerce.netlify.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 - Tomato Food Delivery */}
        <div ref={card4Ref} className="project-card reverse reveal">
          <div className="project-image">
            <a href="https://food-ecommerce-ia3d.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT3.png" 
                alt="Tomato Food Ordering App" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">TOMATO — FOOD ORDERING APP</h3>
            <p className="project-description">
              A food ordering web application with categorized menu browsing, real-time cart state calculation, dish customization, and a mobile-first checkout experience.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/cadsix/food-ecommerce" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://food-ecommerce-ia3d.vercel.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
