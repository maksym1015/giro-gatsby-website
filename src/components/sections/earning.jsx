import React from "react"

const content = `Open your account today to start earning ->`

export const EarningSection = () => {
  return (
    <section className="section-earning">
      <h2>Move Forward with Giro</h2>
      <p className="size-large mt-2 mb-4">{content}</p>
      <button className="btn btn-primary">Start earning</button>
    </section>
  )
}
