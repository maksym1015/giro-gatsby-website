import React from "react"
import { Link } from "gatsby"
import icon from "../../assets/images/icon-lock.svg"

export const ContactSection = () => {
  return (
    <section className="section-contactus">
      <h2>A revolutionary security deposit alternative</h2>
      <p className="size-large mt-3">
        Download the Giro App and start earning today
      </p>
      <div className="input-form my-4">
        <input type="text" placeholder="Enter your phone" />
        <Link to="/" className="btn-link">
          Text Me A Link
        </Link>
      </div>
      <p className="size-big">
        <img src={icon} alt="Lock Icon" />
        Your data is protected. We never spam to your phone
      </p>
    </section>
  )
}
