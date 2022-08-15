import React, { useState } from "react"
import MessageNotifyer from "./MessageNotifyer"

var id1, id2
function Contactme() {
  const [message, setMessage] = useState("sending")

  // window.toe = () => setMessage("error")
  // window.tos = () => setMessage("success")
  // window.tol = () => setMessage("sending")
  const showMessage = (type) => {
    if (type === "sending") {
      document.getElementById("MessageNotifyer").classList.add("open")
    } else {
      document.getElementById("MessageNotifyer").classList.add("open")
      if (document.getElementById("check-icon"))
        document.getElementById("check-icon").style.display = "block" // show

      id1 = setTimeout(() => {
        document.getElementById("MessageNotifyer").classList.remove("open")
      }, 7000)

      id2 = setTimeout(() => {
        if (document.getElementById("check-icon"))
          document.getElementById("check-icon").style.display = "none" // hide
      }, 7300)
    }
  }

  const closePopup = () => {
    document.getElementById("MessageNotifyer").classList.remove("open")

    setTimeout(() => {
      if (document.getElementById("check-icon"))
        document.getElementById("check-icon").style.display = "none" // hide
    }, 300)

    clearTimeout(id1)
    clearTimeout(id2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { name, email, message, project } = Object.fromEntries(formData)
    setMessage("sending")
    showMessage("sending")
    if (navigator.onLine) {
      window.Email.send({
        Host: "smtp.gmail.com",
        Username: "yoshportfolio@gmail.com",
        Password: "port5511",
        To: "hhoon5511@gmail.com",
        From: "yoshportfolio@gmail.com",
        Subject: name,
        Body: `<div style="background: #c4d7ebe8; border-radius: 10px; padding: 20px">

         Project type : ${project}<br/><br/>${message}<br/><br/>${email}
        </div>
        `,
      }).then((message) => {
        if (message === "OK") {
          setMessage("success")
          e.target.reset()
          showMessage("success")
        } else {
          showMessage("error")
        }

        console.log(message)
      })
    } else {
      setMessage("noConnection")
      showMessage("noConnection")
    }
  }

  return (
    // <!--==================== CONTACT ME ====================-->
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <svg className="contact__icon">
              <use xlinkHref="svg/phone.svg#phone"></use>
            </svg>

            <div>
              <h3 className="contact__title">Call Me</h3>
              <a href="tel:+249924146440" className="contact__subtitle">
                +249924146440
              </a>
            </div>
          </div>

          <div className="contact__information">
            <svg className="contact__icon">
              <use xlinkHref="svg/envelope.svg#envelope"></use>
            </svg>

            <div>
              <h3 className="contact__title">Email</h3>
              <a href="mailto:hhoon5511@gmail.com" className="contact__subtitle">
                hhoon5511@gmail.com
              </a>
            </div>
          </div>

          <div className="contact__information">
            <svg className="contact__icon">
              <use xlinkHref="svg/map-marker.svg#map-marker"></use>
            </svg>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Khartoum - Sudan</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__lable">
                Name
              </label>
              <input required type="text" className="contact__input" name="name"></input>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__lable">
                Email
              </label>
              <input required type="email" className="contact__input" name="email"></input>
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__lable">
              Project
            </label>
            <input required type="text" className="contact__input" name="project"></input>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__lable">
              Message
            </label>
            <textarea
              required
              name="message"
              id=""
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>

      <MessageNotifyer type={message} closePopup={closePopup} />
    </section>
  )
}

export default Contactme
