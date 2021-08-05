import React, { useEffect } from "react"

const PortfolioData = [
  {
    title: "Ophelos",
    type: "Desktop App",
    description:
      "A financial and business manager applications that manages the sales of your store or a service you provide.",
    imgs: ["/img/myojooo1.bmp", "/img/myojooo2.bmp", "/img/myojooo2.bmp"],
  },
  {
    title: "Myojooo",
    type: "Desktop App",
    description:
      "A referrals management application for the referral system of ojooo.com PTC website.",
    imgs: ["/img/ophelos1.bmp", "/img/ophelos2.bmp", "/img/ophelos3.bmp", "/img/ophelos4.bmp"],
  },
  {
    title: "Test",
    type: "Desktop App",
    description:
      "A buch of test images to test the quality needed for the portfolio :) and thats it.",
    imgs: ["/img/test1.jpg", "/img/test2.jpg", "/img/test3.jpg"],
  },
]

function Portfolio() {
  let modalPortfolioViews = []

  let openModal = function (modalClick) {
    modalPortfolioViews[modalClick].classList.add("active-modal")
  }

  let closeModal = function (modalClick) {
    modalPortfolioViews.forEach((modalView) => {
      modalView.classList.remove("active-modal")
    })
  }

  useEffect(() => {
    /*==================== PORTFOLIO SWIPER  ====================*/
    window.setupPortfolioSwiper()

    modalPortfolioViews = document.querySelectorAll(".portfolio__modal")
  }, [])
  return (
    // <!--==================== PORTFOLIO ====================-->
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          {PortfolioData.map(({ title, type, description, imgs }, id) => (
            <div key={id} className="portfolio__content grid swiper-slide">
              <img src={imgs[0]} alt="" className="portfolio__img"></img>

              <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <span className="portfolio__subtitle">{type}</span>

                <p className="portfolio__description">{description}</p>

                <span
                  onClick={() => openModal(id)}
                  className="button button--flex button--small portfolio__button "
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <!-- Add Arrows --> */}
        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>

        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>
      </div>

      {/* <!--==================== PORTFOLIO MODAL ====================--> */}
      {PortfolioData.map(({ title, imgs }, id) => (
        <div key={id} className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-title">{title}</h4>
            <i onClick={closeModal} className="uil uil-times portfolio__modal-close"></i>

            <div className="portfolio__container container swiper-container">
              <div className="swiper-wrapper">
                {imgs.map((img, id) => (
                  <div key={id} className=" grid swiper-slide">
                    <img src={img} alt="" className="portfolio__modal-img"></img>
                  </div>
                ))}
              </div>

              {/* <!-- Add Arrows --> */}
              <div className="swiper-button-next portfolio__modal-swiper-next">
                <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
              </div>
              <div className="swiper-button-prev portfolio__modal-swiper-prev">
                <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
              </div>

              {/* <!-- Add Pagination --> */}
              <div className="swiper-pagination modal-pagination"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Portfolio
