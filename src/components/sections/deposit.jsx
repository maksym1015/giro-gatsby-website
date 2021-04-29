import React from "react"

import resident from "../../assets/images/resident.svg"
import owner from "../../assets/images/owner.svg"

export const DepositSection = () => {
  return (
    <section className="section-deposit container">
      <div className="resident">
        <img src={resident} alt="Resident" />
        <h3 className="mt-3">I’m a Resident</h3>
        <p className="size-big">
          Securing your deposit is fast, safe, and transparent. It only takes 2
          minutes. Really!
        </p>
        <button className="btn btn-second mt-3 fix-width">Sign up</button>
      </div>
      <div className="owner">
        <img src={owner} alt="Property Owner" />
        <h3 className="mt-3">I’m a Property Owner</h3>
        <p className="size-big">
          Empower your tenants while providing you a secure and transparent
          deposit alternative.
        </p>
        <button className="btn btn-second mt-3 fix-width">Learn more</button>
      </div>
    </section>
  )
}
