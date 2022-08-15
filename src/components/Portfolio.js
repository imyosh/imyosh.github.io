import React, { useEffect, useRef } from 'react'

const PortfolioData = [
  {
    title: 'Ophelos',
    type: 'Desktop App',
    description:
      'A financial and business manager applications that manages the sales of your store or a service you provide.',
    thumbnail: '/img/ophelos1.png',
    imgs: ['/img/ophelos1.png', '/img/ophelos2.png', '/img/ophelos3.png'],
  },
  {
    title: 'Onxe',
    type: 'Desktop App / Frontend',
    description:
      'A desktop application for stock market monitoring, data visualization and indicators scanning/analyzing tools .',

    thumbnail: '/img/onxe.png',
    imgs: ['/img/onxe.png'],
  },

  {
    title: 'Myojooo',
    type: 'Desktop App',
    description:
      'A referrals management application for the referral system of ojooo.com PTC website.',

    thumbnail: '/img/myojooo1.bmp',
    imgs: ['/img/myojooo1.bmp', '/img/myojooo2.bmp', '/img/myojooo3.bmp'],
  },

  {
    title: 'EndZone - songs',
    type: 'Discord bot',
    description:
      "A discord bot for playing music in the voice channel, ability to add any songs that's available on youtube.",
    thumbnail: '/img/songs1.png',
    imgs: [
      '/img/songs1.png',
      '/img/songs2.png',
      '/img/songs3.png',
      '/img/songs4.png',
    ],
  },
  {
    title: 'EndZone - kick',
    type: 'Discord bot',
    description:
      'A discord bot for kicking unwanted person from a voice channel by the majority vote.',
    thumbnail: '/img/kick1.png',
    imgs: ['/img/kick1.png', '/img/kick2.png'],
  },
]

const Portfolio = () => {
  const portfolio = useRef(null)

  let openModal = (modalClick) => {
    portfolio.current
      .querySelectorAll('.portfolio__modal')
      [modalClick].classList.add('active-modal')
  }

  let closeModal = () => {
    portfolio.current
      .querySelectorAll('.portfolio__modal')
      .forEach((modalView) => {
        modalView.classList.remove('active-modal')
      })
  }

  useEffect(() => {
    window.setupPortfolioSwiper()
  }, [])

  return (
    // <!--==================== PORTFOLIO ====================-->
    <section ref={portfolio} className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          {PortfolioData.map(({ title, type, description, thumbnail }, id) => (
            <div key={id} className="portfolio__content grid swiper-slide">
              <img src={thumbnail} alt="" className="portfolio__img"></img>

              <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <span className="portfolio__subtitle">{type}</span>

                <p className="portfolio__description">{description}</p>

                <span
                  onClick={() => openModal(id)}
                  className="button button--flex button--small portfolio__button "
                >
                  Demo
                  <svg className="button__icon">
                    <use xlinkHref="svg/arrow-right.svg#arrow-right"></use>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <!-- Add Arrows --> */}
        <div className="swiper-button-next">
          <svg className="swiper-portfolio-icon">
            <use xlinkHref="svg/angle-right-b.svg#angle-right-b"></use>
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg className="swiper-portfolio-icon">
            <use xlinkHref="svg/angle-left-b.svg#angle-left-b"></use>
          </svg>
        </div>

        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>
      </div>

      {/* <!--==================== PORTFOLIO MODAL ====================--> */}
      {PortfolioData.map(({ title, imgs }, id) => (
        <div key={id} className="portfolio__modal">
          <div className="portfolio__modal-content">
            <h4 className="portfolio__modal-title">{title}</h4>

            <svg onClick={closeModal} className="portfolio__modal-close">
              <use xlinkHref="svg/times.svg#times"></use>
            </svg>

            <div className="portfolio__container container swiper-container">
              <div className="swiper-wrapper">
                {imgs.map((img, id) => (
                  <div key={id} className=" grid swiper-slide">
                    <img
                      src={img}
                      alt=""
                      className="portfolio__modal-img"
                    ></img>
                  </div>
                ))}
              </div>

              {/* <!-- Add Arrows --> */}
              {/* <div className="swiper-button-next portfolio__modal-swiper-next">
                <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
              </div>
              <div className="swiper-button-prev portfolio__modal-swiper-prev">
                <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
              </div> */}

              <div className="swiper-button-next portfolio__modal-swiper-next">
                <svg className="swiper-portfolio-icon">
                  <use xlinkHref="svg/angle-right-b.svg#angle-right-b"></use>
                </svg>
              </div>
              <div className="swiper-button-prev portfolio__modal-swiper-prev">
                <svg className="swiper-portfolio-icon">
                  <use xlinkHref="svg/angle-left-b.svg#angle-left-b"></use>
                </svg>
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
