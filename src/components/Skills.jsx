function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Here's an overview of the programming languages and technologies I've been learning.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">Python <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">Java <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">C <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">HTML & CSS <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">JavaScript <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills