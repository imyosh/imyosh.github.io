import React from "react"

const MessageNotifyer = ({ type, closePopup }) => {
  return (
    <div className="popup" id="MessageNotifyer">
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
                <use xlinkHref="svg/mail.svg#mail"></use>
              </svg>
              <div className="spinner-box">
                <div className="circle-border">
                  <div className="circle-core"></div>
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

              <svg onClick={closePopup} className="message__close">
                <use xlinkHref="svg/times.svg#times"></use>
              </svg>
            </>
          ) : type === "error" ? (
            <>
              <div>
                <span className="message__title">
                  Error !<br></br>
                </span>
                <span className="message__content-success">
                  Can't send your request at the moment, please try again.
                </span>
              </div>

              <div className="error-mark">
                <div className="sa-error error-icon">
                  <div className="sa-error-x">
                    <div className="sa-error-left"></div>
                    <div className="sa-error-right"></div>
                  </div>
                  <div className="sa-error-placeholder "></div>
                  <div className="sa-error-fix "></div>
                </div>
              </div>

              <svg onClick={closePopup} className="message__close">
                <use xlinkHref="svg/times.svg#times"></use>
              </svg>
            </>
          ) : (
            <>
              <div className="message__NotifiyerConnection">
                <span className="message__title">You are offline</span>

                <span className="message__content-success">Check your internet connection.</span>
              </div>

              <div className="wifi-symbol">
                {/* <div className="wifi-circle first"></div> */}
                <div className="wifi-circle second"></div>
                <div className="wifi-circle third"></div>
                <div className="wifi-circle fourth"></div>
              </div>

              <svg onClick={closePopup} className="message__close">
                <use xlinkHref="svg/times.svg#times"></use>
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageNotifyer
