import { useState } from 'react'
import { FaPlus, FaLink } from 'react-icons/fa'

function Portfolio() {

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Amazon Clone',
      description: 'Amazon web clone design using HTML & CSS',
      category: 'web',
      image: '/portfolio-react/assets/img/portfolio/portfolio-1.png',
      link: 'https://github.com/Yuwandi09/amazon-clone'
    },
    {
      id: 2,
      title: 'YouTube Clone',
      description: 'YouTube frontend UI clone using HTML and CSS',
      category: 'web',
      image: '/portfolio-react/assets/img/portfolio/portfolio-2.png',
      link: 'https://github.com/Yuwandi09/Youtube-clone'
    },
    {
      id: 3,
      title: '2D Game',
      description: 'A 2D game project built from scratch',
      category: 'game',
      image: '/portfolio-react/assets/img/portfolio/portfolio-3.png',
      link: 'https://github.com/Yuwandi09/2D-Game'
    },
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Here are some projects I've built to sharpen my skills.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={() => setFilter('all')} className={filter === 'all' ? 'filter-active' : ''}>All</li>
              <li onClick={() => setFilter('web')} className={filter === 'web' ? 'filter-active' : ''}>Web Clone</li>
              <li onClick={() => setFilter('game')} className={filter === 'game' ? 'filter-active' : ''}>Game</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {filtered.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src={project.image} className="img-fluid" alt={project.title} />
                <div className="portfolio-links">
                  <a href={project.image} target="_blank" rel="noopener" title={project.title}>
                    <FaPlus />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener" title="View on GitHub">
                    <FaLink />
                  </a>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" style={{marginTop: '20px'}}>
            <a href="https://github.com/Yuwandi09?tab=repositories" target="_blank" rel="noopener">
              <button className="show-all">View All on GitHub</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio