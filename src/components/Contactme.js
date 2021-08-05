import React from "react"

function Contactme() {
  return (
    // <!--==================== CONTACT ME ====================-->
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Call Me</h3>
              <a href="tel:+249924146440" className="contact__subtitle">
                +249924146440
              </a>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <a href="mailto:hhoon5511@gmail.com" className="contact__subtitle">
                hhoon5511@gmail.com
              </a>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Khartoum - Sudan</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__lable">
                Name
              </label>
              <input type="text" className="contact__input"></input>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__lable">
                Email
              </label>
              <input type="email" className="contact__input"></input>
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__lable">
              Project
            </label>
            <input type="text" className="contact__input"></input>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__lable">
              Message
            </label>
            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
          </div>

          <div>
            <a href="#" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contactme
