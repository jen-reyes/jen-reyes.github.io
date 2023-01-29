import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"

const Layout = ({ children, dark }) => {
  const isDark = dark ? "layout-content layout-content-dark" : "layout-content"
  return (
    <div style={{ overflowX: "hidden" }} className="layout-wrapper">
      <div className={isDark}>
        <Header></Header>
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
