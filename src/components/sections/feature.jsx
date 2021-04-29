import React from "react"

import img1 from "../../assets/images/free.svg"
import img2 from "../../assets/images/secure.svg"
import img3 from "../../assets/images/reward.svg"

const features = [
  {
    img: img1,
    title: "Worry free",
    content:
      "No more waiting around to get your deposit back from your landlord. Simply match the amount in your Giro account with your new lease deposit and we’ll take care of the rest.",
  },
  {
    img: img2,
    title: "Simple and Secure",
    content:
      "Chances are, you’re going to move a few times in your life. As the account owner, your deposit stays under your name, keeping it safe no matter where life takes you. If you’re ready to move from renter to owner, you can withdraw the funds in your account at any time.",
  },
  {
    img: img3,
    title: "Rewarding",
    content:
      "Once you set up your account, you’ll start earning an interest rate of 2% APY right away. That’s extra money just for keeping your security deposit in your hands",
  },
]

export const FeatureSection = () => {
  const featureList = features.map((item, index) => {
    return (
      <div key={index} className="feature-item">
        <img src={item.img} alt={item.title} />
        <h3 className="my-3">{item.title}</h3>
        <p>{item.content}</p>
      </div>
    )
  })
  return (
    <section className="section-feature container">
      <h2>It’s time to let your money work for you</h2>
      <div className="feature">{featureList}</div>
    </section>
  )
}
