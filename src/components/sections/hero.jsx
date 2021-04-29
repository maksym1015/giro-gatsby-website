import React from "react"

import heroImg from "../../assets/images/hero.svg"
const content = `Put your money to work and start collecting interest instead of dust.`

export const HeroSection = () => {
  return (
    <section className="section-hero container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="section-title">
            Say hello to <span className="primary-col">Giro</span> - your
            security deposit alternative.
          </h1>
          <p className="size-large my-2">{content}</p>
          <button to="/" className="btn btn-primary">
            Get Started
          </button>
        </div>
        <div className="col-lg-6">
          <img
            srcSet={heroImg}
            alt="Say hello to Giro - your security deposit alternative."
          />
        </div>
      </div>
    </section>
  )
}
