import React from "react"

const headerContent =
  "We believe in empowering renters with creative tools and services to better navigate the apartment rental process."

export const VisionSection = () => {
  return (
    <section className="section-vision">
      <h2>Our vision</h2>
      <p className="size-large my-4">{headerContent}</p>
      <button className="btn btn-primary">Secure my deposit</button>
    </section>
  )
}
