import React, { useEffect } from "react"

function Qualification() {
  useEffect(() => {
    /*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content")

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
      })
    })
  }, [])
  return (
    // <!--==================== QUALIFICATION ====================-->
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex" data-target="#work">
            {/* <!-- <i className="uil uil-briefcase-alt qualification__icon"></i> --> */}
            <i className="uil uil-laptop qualification__icon"></i>
            Coding
          </div>
        </div>

        <div className="qualification__sections">
          {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
          <div className="qualification__content qualification__active" data-content id="education">
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Mechatronics Enginner</h3>
                <span className="qualification__subtitle">Future - University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 2 ====================--> */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Arduino</h3>
                <span className="qualification__subtitle">Sumerics labs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 3 ====================--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">A+ (220-1001 & 220-1002)</h3>
                <span className="qualification__subtitle">Online courses</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>
            </div>
          </div>

          {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
          <div className="qualification__content data" data-content id="work">
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desktop Developer</h3>
                <span className="qualification__subtitle">Online Courses</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 2 ====================--> */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Online Courses</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 3 ====================--> */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>

              <div>
                <h3 className="qualification__title">Backend Developer</h3>
                <span className="qualification__subtitle">Online Courses</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
