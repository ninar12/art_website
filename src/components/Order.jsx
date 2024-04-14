import React from "react"
import "./popup.css"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

const PopupOrder = ({ artTitle, closePopup }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href =
      "mailto:ninajr11@icloud.com?subject=Order request of " +
      artTitle +
      "&body=Hi Nina, I would like to order " +
      artTitle +
      ". Please contact me at: " +
      document.getElementsByClassName("contact_info")[0].value +
      ". My address is: " +
      document.getElementsByClassName("address")[0].value +
      "."
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Please put your name"),
    contact: Yup.string()
      .required("Please put your number or email address")
      .test(
        "is-email-or-number",
        "Please put a valid number or email address",
        (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          const numberRegex = /^[0-9]+$/
          return emailRegex.test(value) || numberRegex.test(value)
        }
      ),
    city: Yup.string().required(
      "City is a required field so Nina has an idea of where you are ordering from"
    ),
    date: Yup.date().default(() => new Date()),
  })
  const initialValues = {
    name: "",
    contact: "",
    city: "",
    date: new Date(),
  }
  const renderError = (message) => <p className="error">{message}</p>

  return (
    <alert className="popup">
      <div className="popup_inner order">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values)
            resetForm()
          }}>
          <Form>
            <div className="header">
              <h1>THANK YOU FOR REQUESTING AN ORDER OF {artTitle}</h1>
              <button className="close" onClick={closePopup}>
                X
              </button>
            </div>
            <div className="container_order">
              <span>
                <label for="contact_info">Name</label>
                <Field
                  name="name"
                  type="text"
                  className="contact_info"
                  placeholder="Your Name"></Field>
                <ErrorMessage name="name" render={renderError} />
              </span>

              <span>
                <label for="contact_info">Contact info</label>
                <Field
                  name="contact"
                  type="text"
                  className="contact_info"
                  placeholder="Your number or email"></Field>
                <ErrorMessage name="contact" render={renderError} />
              </span>
            </div>
            <div class="address-span">
              <label for="address">City you're in</label>
              <Field
                name="city"
                type="textarea"
                className="address"
                placeholder="Where you reside"></Field>
              <ErrorMessage name="city" render={renderError} />
            </div>
            <input
              type="submit"
              onClick={(e) => {
                handleSubmit(e)
              }}
              class="submit_order"
              value="SUBMIT ↗"
            />
          </Form>
        </Formik>
      </div>
    </alert>
  )
}

export default PopupOrder
