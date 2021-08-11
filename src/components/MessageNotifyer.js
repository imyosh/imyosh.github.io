import React from "react"

const MessageNotifyer = ({ type }) => {
  console.log(type)
  const closePopup = () => {
    document.getElementById("MessageNotifyer").classList.remove("open")

    setTimeout(() => {
      if (document.getElementById("check-icon"))
        document.getElementById("check-icon").style.display = "none" // hide
    }, 300)
  }

  return (
    <div onClick={closePopup} className="popup" id="MessageNotifyer">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="popup__content "
      >
        <div className="popup__card">
          {type === "sending" ? (
            <>
              <div className="message__NotifiyerConnection">
                <span className="message__title">Sending your request ...</span>
              </div>
              <svg className="message__mail">
                <use xlinkHref="img/mail.svg#mail"></use>
              </svg>
              <div class="spinner-box">
                <div class="circle-border">
                  <div class="circle-core"></div>
                </div>
              </div>
            </>
          ) : type === "success" ? (
            <>
              <div>
                <span className="message__title">
                  Sent successfully<br></br>
                </span>
                <span className="message__content-success">
                  I will reply to your request soon through your Email.
                </span>
              </div>

              <div className="success-checkmark">
                <div className="check-icon" id="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="message__NotifiyerConnection">
                <span className="message__title">You are offline</span>

                <span className="message__content-success">Check your internet connection.</span>
              </div>

              <div class="wifi-symbol">
                {/* <div class="wifi-circle first"></div> */}
                <div class="wifi-circle second"></div>
                <div class="wifi-circle third"></div>
                <div class="wifi-circle fourth"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageNotifyer
