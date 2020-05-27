import React from "react"

import Header from "../components/header.js"
import Container from "../layouts/container"
import Home from "./home"
import { Portal } from "@rmwc/base"

export default () => {
  return (
    <div>
      <Header />
      <div>
        <Portal />
      </div>
      <Home />
    </div>
  )
}
