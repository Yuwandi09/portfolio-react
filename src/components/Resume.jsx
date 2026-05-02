function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Enthusiastic Software Engineering undergraduate seeking internship opportunities.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">

            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Yuwandi Sandanayake</h4>
              <p>I'm an enthusiastic and motivated individual with a passion for programming and problem-solving. Currently seeking internship opportunities.</p>
              <ul>
                <li>Sri Lanka</li>
                <li>yuwandisandanayake@gmail.com</li>
                <li>+94 743 537 714</li>
              </ul>
            </div>

            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>No Work Experience Yet</h4>
              <p>Currently looking for internship opportunities to gain hands-on industry experience.</p>
            </div>

            <div className="text-center mt-4">
              <a href="/Yuwandi-CV.pdf" download="Yuwandi-Sandanayake-CV.pdf">
                <button className="show-all">Download CV</button>
              </a>
            </div>

          </div>

          <div className="col-lg-6">

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Sc. Hons in Software Engineering</h4>
              <h5>2025 - Present</h5>
              <p>University of Kelaniya, Sri Lanka</p>
              <p>Currently pursuing an honours degree in Software Engineering.</p>
            </div>

            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>Amazon Clone</h4>
              <p>HTML & CSS</p>
              <p>Recreated the Amazon homepage layout to practise responsive web design.</p>
            </div>

            <div className="resume-item">
              <h4>YouTube Clone</h4>
              <p>HTML & CSS</p>
              <p>Built a YouTube frontend UI clone to strengthen CSS skills.</p>
            </div>

            <div className="resume-item">
              <h4>2D Game</h4>
              <p>Developed a 2D game project to explore game logic.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume