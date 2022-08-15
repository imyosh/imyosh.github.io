import React, { useEffect } from "react"

const Header = () => {
  useEffect(() => {
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
      })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
      })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll(".nav__link")

    function linkAction() {
      const navMenu = document.getElementById("nav-menu")
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove("show-menu")
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction))

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById("theme-button")
    const darkTheme = "dark-theme"

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme")

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)

      if (selectedTheme === "dark") {
        // themeButton.classList.add("uil-sun")
        // themeButton.classList.remove("uil-moon")

        themeButton.firstChild.href.baseVal = "svg/sun.svg#sun"
      } else {
        // themeButton.classList.add("uil-moon")
        // themeButton.classList.remove("uil-sun")

        themeButton.firstChild.href.baseVal = "svg/moon.svg#moon"
      }
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)

      if (themeButton.firstChild.href.baseVal === "svg/sun.svg#sun") {
        themeButton.firstChild.href.baseVal = "svg/moon.svg#moon"
      } else {
        themeButton.firstChild.href.baseVal = "svg/sun.svg#sun"
      }

      // themeButton.classList.toggle("uil-moon")
      // themeButton.classList.toggle("uil-sun")
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme())
    })

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById("header")
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 80) nav.classList.add("scroll-header")
      else nav.classList.remove("scroll-header")
    }
    window.addEventListener("scroll", scrollHeader)
  }, [])

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Yosh
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/estate.svg#estate"></use>
                </svg>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/user.svg#user"></use>
                </svg>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/file-alt.svg#file-alt"></use>
                </svg>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/briefcase-alt.svg#briefcase-alt"></use>
                </svg>
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/scenery.svg#scenery"></use>
                </svg>
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <svg className="nav__icon">
                  <use xlinkHref="svg/message.svg#message"></use>
                </svg>
                ContactMe
              </a>
            </li>
          </ul>

          <svg className="nav__close nav__icon" id="nav-close">
            <use xlinkHref="svg/times.svg#times"></use>
          </svg>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          {/* <i className="uil uil-sun change-theme" id="theme-button"></i> */}

          <svg className="change-theme" id="theme-button">
            <use xlinkHref="svg/sun.svg#sun"></use>
          </svg>

          <div className="nav__toggle" id="nav-toggle">
            {/* <i className="uil uil-apps"></i> */}

            <svg>
              <use xlinkHref="svg/apps.svg#apps"></use>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
