import React from "react"

export default function Hero({ location }) {
  const heroClass = () => {
    if (location === "galway") {
      return "hero hero-galway"
    } else if (location === "coached") {
      return "hero hero-coached"
    } else if (location === "airport") {
      return "hero hero-airport"
    } else if (location === "soc") {
      return "hero hero-ontario-SOC"
    } else if (location === "maloof") {
      return "hero hero-maloof"
    } else if (location === "smoky") {
      return "hero hero-smoky"
    } else if (location === "nieves") {
      return "hero hero-nieves"
    } else if (location === "soh") {
      return "hero hero-soh"
    } else if (location === "tuwu") {
      return "hero hero-tuwu"
    } else if (location === "ocvb") {
      return "hero hero-ocvb"
    } else if (location === "loma") {
      return "hero hero-ll"
    } else if (location === "puma") {
      return "hero hero-puma"
    } else {
      return "hero hero-coached"
    }
  }

  const className = heroClass()

  return <div className={className}></div>
}
