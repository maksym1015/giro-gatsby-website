import React from "react"
import { Link } from "gatsby"

import logo from "../../assets/images/logo.svg"
import linkedin from "../../assets/images/linkedin.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"

export default function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-md-4">
          <a href="/">
            <img src={logo} alt="Giro Logo" />
          </a>
          <p className="size-xsmall mt-3">
            Redefine how you secure your nextlease, Unlike traditional security
            deposits, Giro is the alternative that lets you keep your money in
            your hands while giving landlords the security they need. Here’s how
            it works:
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <p>Support</p>
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <p>Support</p>
          <ul>
            <li>
              <a href="/">Residents</a>
            </li>
            <li>
              <a href="/">Property Owners</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 btn-groups">
          <button className="btn btn-second">Login</button>
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
    </footer>
  )
}
