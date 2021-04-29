import React from "react"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import {
  HeroSection,
  RedefineSection,
  VisionSection,
  DepositSection,
  EarningSection,
  FeatureSection,
  ContactSection,
} from "../components/sections"

import "../assets/scss/style.scss"
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RedefineSection />
        <VisionSection />
        <DepositSection />
        <EarningSection />
        <FeatureSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
