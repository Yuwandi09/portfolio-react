import { FaChevronRight } from 'react-icons/fa'

function About(){
  return(
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>I'm an enthusiastic and motivated individual with a passion for programming and problem-solving. I enjoy learning new technologies and building practical projects that improve my skills. I'm currently seeking internship opportunities where I can gain hands-on experience and contribute to real-world solutions.</p>
        </div>

        <div className="row about-me-row">
          <div className="col-lg-4">
            <img src="/assets/img/yuwandi-profile.png" className="img-fluid" alt="Yuwandi" />
          </div>
          <div className="col-lg-8 content">
            <h3>Software Engineering Undergraduate</h3>
             <p class="font-italic">
              <i class="fas fa-snowflake"></i> Passionate about building clean, efficient and practical software solutions.<br/>
              <i class="fas fa-snowflake"></i> Fast learner, collaborative team player, and enthusiastic about exploring new technologies.
            </p>
             <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><FaChevronRight /> <strong>Phone:</strong> <a rel="noopener" href="tel:+94743537714">+94 743 537 714</a></li>
                  <li><FaChevronRight /> <strong>Email:</strong> <a rel="noopener" href="mailto:yuwandisandanayake@gmail.com">yuwandisandanayake@gmail.com</a></li>
                  <li><FaChevronRight /> <strong>Github:</strong> <a rel="noopener" href="https://github.com/Yuwandi09" target="_blank">Yuwandi09</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><FaChevronRight /> <strong>Degree:</strong> B.Sc(Hons.) Software Engineering</li>
                  <li><FaChevronRight /> <strong>Internship:</strong> Available</li>
                  <li><FaChevronRight /> <strong>City:</strong> Sri Lanka</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        

      </div>
    </section>
  )
}

export default About