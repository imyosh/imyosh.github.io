import React from 'react'

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="img/about.jpg" alt="" className="about__img"></img>

        <div className="about__data">
          <p className="about__description">
            Full stack developer, with decent knowledge and over 3 years of
            experience, working in desktop and web technologies, delivering
            quality work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">3+</span>
              <span className="about__info-name">
                Year <br></br> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br></br>projects
              </span>
            </div>
            <div>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">
                Experienced <br></br>frameworks
              </span>
            </div>
            {/* <!-- <div>
                            <span className="about__info-title">00</span>
                            <span className="about__info-name">Companies <br> worked</span>
                        </div> --> */}
          </div>

          <div className="about__buttons">
            <a
              download=""
              href="pdf/YoshCv.pdf"
              className="button button--about-a"
            >
              Download CV
              <svg className="button__icon button__icon-download">
                <use xlinkHref="svg/download-alt.svg#download-alt"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
