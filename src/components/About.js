import React from "react"

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="img/about.jpg" alt="" className="about__img"></img>

        <div className="about__data">
          <p className="about__description">
            Full stack developer, with decent knowledge and over one year of experience, working in
            desktop and web technologies, delivering quality work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">1+</span>
              <span className="about__info-name">
                Year <br></br> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">6+</span>
              <span className="about__info-name">
                Completed <br></br>big project
              </span>
            </div>
            <div>
              <span className="about__info-title">15+</span>
              <span className="about__info-name">
                Completed <br></br>small project
              </span>
            </div>
            {/* <!-- <div>
                            <span className="about__info-title">00</span>
                            <span className="about__info-name">Companies <br> worked</span>
                        </div> --> */}
          </div>

          <div className="about__buttons">
            <a download="" href="pdf/Alexa-Cv.pdf" className="button button--fle">
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
