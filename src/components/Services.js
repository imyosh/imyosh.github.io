import React, { useState } from "react"

import ServicesModal from "./ServicesModal"

let ServicesData = [
  {
    title: "Desktop",
    subtitle: "Developing",
    icon: "svg/desktop.svg#desktop",
    modal: [
      "I develop the user interface.",
      "Responsive and modren style.",
      "I create ux element interactions.",
      "Creating a dedicated server for acounts system.",
    ],
  },

  {
    title: "Frontend",
    subtitle: "Developing",
    icon: "svg/arrow.svg#arrow",
    modal: [
      "I develop the frontend of your website.",
      "Responsive and modren style.",
      "Including contacting form and other functionalities.",
      "I position your company brand.",
    ],
  },

  {
    title: "Backend Api",
    subtitle: "Developing",
    icon: "svg/server-network.svg#server-network",
    modal: [
      "Creating a backend server or an api.",
      "Developing with FastAPI for fast performance.",
      "Buidling for microservices architecture.",
      "Including data validating.",
    ],
  },

  {
    title: "Discord bot",
    subtitle: "Developing",
    icon: "svg/discord.svg#discord",
    modal: ["Building a custom bot for your server.", "Bot messages with Modren style."],
  },

  {
    title: "Portfolio",
    subtitle: "Website",
    icon: "svg/postcard.svg#postcard",
    modal: [
      "Nice looking portfolio Website.",
      "Responsive and modren style.",
      "Build in contacting form.",
    ],
  },

  {
    title: "Project",
    subtitle: "Assistance",
    icon: "svg/users-alt.svg#users-alt",
    modal: [
      "Helping you with a project you are working on.",
      "Providing assistance for Python or JavaScript projects.",
    ],
  },
]
const Services = () => {
  const [modal, setModal] = useState("Desktop")

  const openModal = (modal) => {
    document.getElementById("services-modal").classList.add("active-modal")
    setModal(modal)
  }

  // useEffect(() => {
  //   /*==================== SERVICES MODAL ====================*/
  //   const modalViews = document.querySelectorAll(".services__modal"),
  //     modalBtns = document.querySelectorAll(".services__button"),
  //     modalCloses = document.querySelectorAll(".services__modal-close")

  //   let modal = function (modalClick) {
  //     modalViews[modalClick].classList.add("active-modal")
  //   }

  //   modalBtns.forEach((modalBtn, i) => {
  //     modalBtn.addEventListener("click", () => {
  //       modal(i)
  //     })
  //   })

  //   modalCloses.forEach((modalClose) => {
  //     modalClose.addEventListener("click", () => {
  //       modalViews.forEach((modalView) => {
  //         modalView.classList.remove("active-modal")
  //       })
  //     })
  //   })

  //   const modalPortfolioViews = document.querySelectorAll(".portfolio__modal"),
  //     portfolioBtns = document.querySelectorAll(".portfolio__button"),
  //     modalPortfolioCloses = document.querySelectorAll(".portfolio__modal-close")

  //   let portfolioModal = function (modalClick) {
  //     modalPortfolioViews[modalClick].classList.add("active-modal")
  //   }

  //   portfolioBtns.forEach((modalBtn, i) => {
  //     modalBtn.addEventListener("click", () => {
  //       portfolioModal(i)
  //     })
  //   })

  //   modalPortfolioCloses.forEach((modalClose) => {
  //     modalClose.addEventListener("click", () => {
  //       modalPortfolioViews.forEach((modalView) => {
  //         modalView.classList.remove("active-modal")
  //       })
  //     })
  //   })
  // }, [])

  return (
    // <!--==================== SERVICES ====================-->
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* <!--==================== SERVICES ====================--> */}

        {ServicesData.map(({ title, subtitle, icon }, id) => (
          <div key={id} className="services__content">
            <div>
              <svg className="services__icon">
                <use xlinkHref={icon}></use>
              </svg>
              <h3 className="services__title">
                {title} <br></br> {subtitle}
              </h3>
            </div>

            <span
              onClick={() => openModal(title)}
              className="button button--flex button--small button--link services__button"
            >
              View More
              <svg className="button__icon button__icon-services">
                <use xlinkHref="svg/arrow-right.svg#arrow-right"></use>
              </svg>
            </span>
          </div>
        ))}
      </div>

      <ServicesModal modal={modal} />
    </section>
  )
}

export default Services
