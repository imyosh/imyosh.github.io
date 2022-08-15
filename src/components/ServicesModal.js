import React from "react"

let ServicesData = {
  Desktop: {
    title: "Desktop",
    subtitle: "Developing",
    icon: "svg/desktop.svg#desktop",
    modalDots: [
      "I develop the user interface.",
      "Responsive and modren style.",
      "I create ux element interactions.",
      "Creating a dedicated server for acounts system.",
    ],
  },

  Frontend: {
    title: "Frontend",
    subtitle: "Developing",
    icon: "svg/arrow.svg#arrow",
    modalDots: [
      "I develop the frontend of your website.",
      "Responsive and modren style.",
      "Including contacting form and other functionalities.",
      "I position your company brand.",
    ],
  },

  "Backend Api": {
    title: "Backend Api",
    subtitle: "Developing",
    icon: "svg/server-network.svg#server-network",
    modalDots: [
      "Creating a backend server or an api.",
      "Developing with FastAPI for fast performance.",
      "Buidling for microservices architecture.",
      "Including data validating.",
    ],
  },

  "Discord bot": {
    title: "Discord bot",
    subtitle: "Developing",
    icon: "svg/discord.svg#discord",
    modalDots: ["Building a custom bot for your server.", "Bot messages with Modren style."],
  },

  Portfolio: {
    title: "Portfolio",
    subtitle: "Website",
    icon: "svg/postcard.svg#postcard",
    modalDots: [
      "Nice looking portfolio Website.",
      "Responsive and modren style.",
      "Build in contacting form.",
    ],
  },

  Project: {
    title: "Project",
    subtitle: "Assistance",
    icon: "svg/users-alt.svg#users-alt",
    modalDots: [
      "Helping you with a project you are working on.",
      "Providing assistance for Python or JavaScript projects.",
    ],
  },
}

const ServicesModal = ({ modal }) => {
  let { title, subtitle, icon, modalDots } = ServicesData[modal]

  const closeModal = () => {
    document.getElementById("services-modal").classList.remove("active-modal")
  }

  return (
    <div onClick={closeModal} className="services__modal" id="services-modal">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="services__modal-content"
      >
        <div className="services__modal-head">
          <svg className="services__modal-head-icon">
            <use xlinkHref={icon}></use>
          </svg>

          <h4 className="services__modal-title">
            {title} {subtitle}
          </h4>
        </div>

        <svg onClick={closeModal} className="services__modal-close">
          <use xlinkHref="svg/times.svg#times"></use>
        </svg>

        <ul className="services__modal-services grid">
          {modalDots.map((dot, id) => (
            <li key={id} className="services__modal-service">
              <svg className="services__modal-icon">
                <use xlinkHref="svg/check-circle.svg#check-circle"></use>
              </svg>
              <p>{dot}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServicesModal
