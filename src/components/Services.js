import React, { useEffect } from "react"

function Services() {
  useEffect(() => {
    /*==================== SERVICES MODAL ====================*/
    const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close")

    let modal = function (modalClick) {
      modalViews[modalClick].classList.add("active-modal")
    }

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        modal(i)
      })
    })

    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
          modalView.classList.remove("active-modal")
        })
      })
    })

    const modalPortfolioViews = document.querySelectorAll(".portfolio__modal"),
      portfolioBtns = document.querySelectorAll(".portfolio__button"),
      modalPortfolioCloses = document.querySelectorAll(".portfolio__modal-close")

    let portfolioModal = function (modalClick) {
      modalPortfolioViews[modalClick].classList.add("active-modal")
    }

    portfolioBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener("click", () => {
        portfolioModal(i)
      })
    })

    modalPortfolioCloses.forEach((modalClose) => {
      modalClose.addEventListener("click", () => {
        modalPortfolioViews.forEach((modalView) => {
          modalView.classList.remove("active-modal")
        })
      })
    })
  }, [])

  return (
    // <!--==================== SERVICES ====================-->
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* <!--==================== SERVICES 1 ====================--> */}
        <div className="services__content">
          <div>
            {/* <!-- <i className="uil uil-web-grid services__icon"></i> --> */}
            <i className="uil uil-desktop services__icon"></i>

            <h3 className="services__title">
              Desktop <br></br> Developing
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Desktop Developing</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Responsive and modren style.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 2 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br></br> Developing
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Frontend Developing</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Responsive and modren style.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I position your company brand.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 3 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-server-network services__icon"></i>
            <h3 className="services__title">
              Backend Api <br></br> Developing
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Backend Api Developing</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                {/* <!-- <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>developing the user interface.</p>
                                    </li> --> */}
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Developing with FastAPI for fast performance.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Buidling for microservices architecture.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Including data validating.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 4 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-discord services__icon"></i>
            <h3 className="services__title">
              Discord bot <br></br> Developing
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Discord bot Developing</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Building a custom bot for your server.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Bot messages with Modren style.</p>
                </li>
                {/* <!-- <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create ux element interactions.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand.</p>
                                    </li> --> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 5 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Portfolio <br></br> Website
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Portfolio Website</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Nice looking portfolio Website.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Responsive and modren style.</p>
                </li>
                {/* <!-- <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I create ux element interactions.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position your company brand.</p>
                                    </li> --> */}
              </ul>
            </div>
          </div>
        </div>

        {/* <!--==================== SERVICES 6 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Project <br></br> Assistance
            </h3>
          </div>

          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Project Assistance</h4>
              <i className="uil uil-times services__modal-close"></i>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Helping you with a project you are working on.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>Providing assistance for Python or JavaScript projects.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
