import React from "react"
import Layout from "../components/layout"
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
export default function App() {
  return (
    <Layout>
      <main>
        <HeroSection />
        <RedefineSection />
        <VisionSection />
        <DepositSection />
        <EarningSection />
        <FeatureSection />
        <ContactSection />
      </main>
    </Layout>
  )
}
