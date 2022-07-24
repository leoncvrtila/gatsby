import React, { Fragment } from "react"
import Nav from "./nav"
import Footer from "./footer"
import "normalize.css"
import "../assets/css/main.css"

const Layout = props => {
  return (
    <Fragment>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
