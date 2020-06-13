import React from "react"

import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import Header from "../layouts/header"

import Img from "gatsby-image"
import "@rmwc/grid/styles"
import { useStaticQuery, graphql } from "gatsby"
import configStyles from "../styles/configurator.module.css"

export default () => {
  // const data = useStaticQuery(graphql`query`)

  return <Header></Header>
}
