import { useEffect, useRef } from 'react'
import Typed from 'typed.js'


function Hero(){

  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Software Engineering Undergraduate', 'Python Developer', 'Web Developer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    })
    return () => typed.destroy()
},[])

  return (
    <section id="hero">
      <div className="hero-container">
        <h1>Yuwandi Sandanayake</h1>
        <p>I'm <span ref={typedRef}></span></p>
      </div>
    </section>
  )

}

export default Hero