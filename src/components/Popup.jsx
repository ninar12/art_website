import React from "react"
import "./popup.css"
const Popup = ({ artTitle, closePopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Request submitted")
  }
  return (
    <alert className="popup">
      <div className="popup_inner">
        <div className="header">
          <h1>THANK YOU FOR REQUESTING AN ORDER OF {artTitle}</h1>
          <button className="close" onClick={closePopup}>
            X
          </button>
        </div>
        <label for="contact_info">
          If you want to stay updated, <b>submit</b> your email
        </label>
        <div style={{ display: "flex", padding: "5%" }}>
          <input
            className="your_email_input"
            placeholder="Your Email or whatever u want"
            type="text"></input>
          <input
            style={{ width: "100%", marginLeft: "5%" }}
            type="submit"
            value="SUBMIT ↗"
          />
        </div>
      </div>
    </alert>
  )
}

export default Popup
