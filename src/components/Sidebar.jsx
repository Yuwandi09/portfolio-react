import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaHome, FaUser, FaBriefcase, FaServer, FaFileAlt, FaEnvelope } from 'react-icons/fa'

function Sidebar() {

  const scrollToSection = (e, sectionId) => {
  e.preventDefault()
  setActive(sectionId)
  setMobileOpen(false)
  const el = document.getElementById(sectionId)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }
}

  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'about', 'portfolio', 'skills', 'resume', 'contact']

    const handleScroll = () => {
      let current = 'hero'
      sections.forEach(section => {
        const el = document.getElementById(section)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 150) {
            current = section
          }
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

return (
    <div className={mobileOpen ? 'mobile-nav-active' : ''}>
      <button 
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
      <header id="header">
      <div>
        <div className="profile">
          <img src="/assets/img/yuwandi-profile.png" alt="profile" />
          <h1><a href="/">Yuwandi Sandanayake</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://www.linkedin.com/in/yuwandi/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yuwandi09" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://wa.me/+94703732930" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
          <nav className="nav-menu"> 
            <ul>
             <li className={active === 'hero' ? 'active' : ''}>
              <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}><FaHome /> Home</a>
            </li>

            <li className={active === 'about' ? 'active' : ''}>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}><FaUser /> About</a>
            </li>

            <li className={active === 'portfolio' ? 'active' : ''}>
              <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}><FaBriefcase /> Portfolio</a>
            </li>

            <li className={active === 'skills' ? 'active' : ''}>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}><FaServer /> Skills</a>
            </li>

            <li className={active === 'resume' ? 'active' : ''}>
              <a href="#resume" onClick={(e) => scrollToSection(e, 'resume')}><FaFileAlt /> Resume</a>
            </li>

            <li className={active === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}><FaEnvelope /> Contact</a>
            </li>
            </ul>
          </nav>
        </div>  
      </div>
    </header>
    </div>
  )
}

export default Sidebar