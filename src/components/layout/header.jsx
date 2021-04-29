import React from "react"
import { Link } from "gatsby"
import logo from "../../assets/images/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar container">
        <Link to="/">
          <img alt="altrady logo" src={logo} />
        </Link>
        <div className="nav-items">
          <ul>
            <li className="nav-item">
              <Link to="#residents" className="nav-link activity">
                Residents
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#owners" className="nav-link">
                Property Owners
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/" className="btn btn-second mr-3">
              Login
            </Link>
            <Link to="/" className="btn btn-primary">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
