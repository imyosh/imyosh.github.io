import { useEffect } from "react"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Qualification from "./components/Qualification"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import ProjectInMind from "./components/ProjectInMind"
import Contactme from "./components/Contactme"
import Footer from "./components/Footer"

const App = () => {
  useEffect(() => {
    /*==================== SHOW SCROLL UP ====================*/
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up")
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
      else scrollUp.classList.remove("show-scroll")
    }
    window.addEventListener("scroll", scrollUp)

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll("section[id]")

    function scrollActive() {
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        let sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.add("active-link")
        } else {
          document
            .querySelector(".nav__menu a[href*=" + sectionId + "]")
            .classList.remove("active-link")
        }
      })
    }
    window.addEventListener("scroll", scrollActive)
  }, [])
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <ProjectInMind />
        <Contactme />
        <Footer />
      </main>

      {/* <!--==================== SCROLL TOP ====================--> */}
      <a href="#home" className="scrollup" id="scroll-up">
        <svg className="scrollup__icon">
          <use xlinkHref="svg/arrow-up.svg#arrow-up"></use>
        </svg>
      </a>
    </>
  )
}

export default App
