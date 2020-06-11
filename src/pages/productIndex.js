import React from "react"
import Container from "../layouts/container"

import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import Header from "../components/header"
import DropDownCard from "../components/dropdownCard"
import FeatureCard from "../components/featureCard"

import Img from "gatsby-image"
import "@rmwc/grid/styles"
import { useStaticQuery, graphql } from "gatsby"
import configStyles from "../styles/configurator.module.css"

import FilterDrawer from "../components/filterDrawer"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "HomeImage.jpg" }) {
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
  const products = ["type01", "type02", "type03"]
  const span = 4
  const phone = 4
  const tablet = 4

  const getProducts = () => {
    return products.map(product => (
      <GridCell span={span} phone={phone} tablet={tablet}>
        <FeatureCard
          title={product}
          image={data.file.childImageSharp.fluid}
          height="20rem"
        />
      </GridCell>
    ))
  }

  return (
    <Container>
      <Header />
      <div style={{ display: "flex", alignItems: "center", margin: "2rem" }}>
        <Typography
          style={{ width: "100vw", textAlign: "center" }}
          use="headline4"
        >
          Product Index
        </Typography>
      </div>

      <Grid style={{ width: "100vw" }}>
        <GridCell span={span} phone={0} tablet={tablet}>
          <FilterDrawer />
        </GridCell>
        <GridCell span={8} phone={phone} tablet={tablet}>
          <GridRow>
            {/* <GridCell
              span={2 * span}
              phone={phone}
              tablet={tablet}
              style={{ flexDirection: "row" }}
            > */}
            {getProducts()}
            {/* </GridCell> */}
          </GridRow>
        </GridCell>
      </Grid>
    </Container>
  )
}
