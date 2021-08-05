import React from "react"

function Footer() {
  return (
    // <!--==================== FOOTER ====================-->
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Yosh</h1>
            <span className="footer__subtitle">Full stack developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/hassan_yosh/"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=100005312891117"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>

            <a
              href="https://mobile.twitter.com/Hassan_Yosh"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169;
          {/* <!-- Bedimcode. --> */}
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
