import React, { useEffect } from 'react'

function Skills() {
  useEffect(() => {
    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills() {
      let itemClass = this.parentNode.className

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
      }
      if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills)
    })
  }, [])
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/* <!--==================== SKILLS 1 ====================--> */}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <svg className="skills__icon">
                <use xlinkHref="svg/brackets-curly.svg#brackets-curly"></use>
              </svg>

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than one year</span>
              </div>

              <svg className="skills__arrow">
                <use xlinkHref="svg/angle-down.svg#angle-down"></use>
              </svg>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
            </div>
          </div>

          {/* <!--==================== SKILLS 2 ====================--> */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <svg className="skills__icon">
                <use xlinkHref="svg/server-network.svg#server-network"></use>
              </svg>

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">More than six months</span>
              </div>

              <svg className="skills__arrow">
                <use xlinkHref="svg/angle-down.svg#angle-down"></use>
              </svg>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">sqlite3</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__sqlite3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* <!--==================== SKILLS 4 ====================--> */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <svg className="skills__icon">
                <use xlinkHref="svg/desktop.svg#desktop"></use>
              </svg>

              <div>
                <h1 className="skills__title">Desktop developer</h1>
                <span className="skills__subtitle">More than one year</span>
              </div>

              <svg className="skills__arrow">
                <use xlinkHref="svg/angle-down.svg#angle-down"></use>
              </svg>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Electron</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__electron"></span>
                </div>
              </div>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>

          {/* <!--==================== SKILLS 3 ====================--> */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <svg className="skills__icon">
                <use xlinkHref="svg/discord.svg#discord"></use>
              </svg>

              <div>
                <h1 className="skills__title">Discord bot developer</h1>
                <span className="skills__subtitle">More than three months</span>
              </div>

              <svg className="skills__arrow">
                <use xlinkHref="svg/angle-down.svg#angle-down"></use>
              </svg>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Discord.js</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__discord"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills