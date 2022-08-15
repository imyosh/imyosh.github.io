import React from "react"
import BackgroundAnimation from "./BackgroundAnimation"

const Home = () => {
  return (
    // <!--==================== HOME ====================-->
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/hassan-esameldin/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="home__social-icon">
                <use xlinkHref="svg/linkedin-alt.svg#linkedin-alt"></use>
              </svg>
            </a>

            <a href="https://github.com/imyosh" target="_blank" rel="noreferrer">
              <svg className="home__social-icon">
                <use xlinkHref="svg/github-alt.svg#github-alt"></use>
              </svg>
            </a>

            <a
              href="https://leetcode.com/yosh5511/"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <svg className="home__social-icon">
                <use xlinkHref="svg/leetcode.svg#leetcode"></use>
              </svg>
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              id="blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image className="home__blob-img" x="22" y="7" xlinkHref="/img/profile.png" />
              </g>
            </svg>
            <div></div>
          </div>

          <div className="home__data">
            <BackgroundAnimation />

            <h1 className="home__title">Hi, I'am Yosh</h1>
            <h3 className="home__subtitle">Full stack developer</h3>
            <p className="home__description">
              Decent level of experience in desktop and web development, producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me
              <svg className="button__icon">
                <use xlinkHref="svg/message.svg#message"></use>
              </svg>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <svg className="home__scroll-mouse">
              <use xlinkHref="svg/mouse-alt.svg#mouse-alt"></use>
            </svg>

            <span className="home__scroll-name">Scroll down</span>

            <svg className="home__scroll-arrow">
              <use xlinkHref="svg/arrow-down.svg#arrow-down"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
