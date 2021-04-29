import React from "react"
import img1 from "../../assets/images/step1.svg"
import img2 from "../../assets/images/step2.svg"
import img3 from "../../assets/images/step3.svg"

const headerContent =
  "Unlike traditional security deposits, Giro is the alternative that lets you keep your money in your hands while giving landlords the security they need. Here’s how it works:"

const steps = [
  {
    img: img1,
    step: "Step 1",
    title: "Open your Giro account",
    content: `Create your personal account and deposit funds equal to the security deposit amount in your lease agreement. You'll immediately start earning interest up to 2% APY.`,
  },
  {
    img: img2,
    step: "Step 2",
    title: "Link your landlord",
    content: `Whether you're moving tomorrow or next year, your Giro account stays in one place. When it's time to link a new landlord to your existing account, we'll provide you with the pre-authorization you need so you can easily move from one place to the next.`,
  },
  {
    img: img3,
    step: "Step 3",
    title: "Watch your money grow",
    content: `No matter if your're in a 6-month or 3-year lease, your Giro account keeps earning interest. Expecting a more expensive move in the future? Easily add additional funds to your account as you move to match your new lease requirements.`,
  },
]

export const RedefineSection = () => {
  const stepItem = steps.map((item, index) => (
    <div key={index} className="col-md-4">
      <img className="step" src={item.img} alt={item.title} />
      <h3 className="mt-3 mb-2">
        <span className="primary-col">{item.step}</span>
        <br />
        {item.title}
      </h3>
      <p>{item.content}</p>
    </div>
  ))
  return (
    <section className="section-redefine container">
      <div className="redefine">
        <h2>Redefine how you secure your next lease</h2>
        <p className="size-large my-2">{headerContent}</p>
      </div>
      <div className="row">{stepItem}</div>
    </section>
  )
}
