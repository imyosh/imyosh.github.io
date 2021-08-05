import React from "react"

function ProjectInMind() {
  return (
    // <!--==================== PROJECT IN MIND ====================-->
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__dataa">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me now and get your new project up and running.
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contant Me
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>

          <img src="/img/project.png" alt="" className="project__img"></img>
        </div>
      </div>
    </section>
  )
}

export default ProjectInMind
