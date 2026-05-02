import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div>
      <Sidebar />
      <main id="main">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App