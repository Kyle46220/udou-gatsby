import React from "react"

import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import Header from "../layouts/header"

import Container from "../layouts/container"
import ConfigControls from "../components/configControls"

import Img from "gatsby-image"
import "@rmwc/grid/styles"
import { useStaticQuery, graphql } from "gatsby"
import configStyles from "../styles/configurator.module.css"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Dresser.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(
            width: 1000
            height: 1000
            duotone: { highlight: "#fff000", shadow: "#333fff" }
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Header />
      <Grid>
        <GridRow>
          <GridCell span={6} phone={4} tablet={4}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </GridCell>
          <GridCell span={6} phone={4} tablet={4}>
            <ConfigControls />
          </GridCell>
          <GridCell></GridCell>
        </GridRow>
      </Grid>
    </Container>
  )
}
