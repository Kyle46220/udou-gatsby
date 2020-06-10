import React from "react"
import Container from "../layouts/container"
import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import Cover from "../components/coverButton"
import Img from "gatsby-image"
import "@rmwc/grid/styles"
import { useStaticQuery, graphql } from "gatsby"
import homeStyles from "../styles/home.module.css"

import ProductCards from "../components/productCards"
import LargeCardContainer from "../components/largeCardContainer"

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
  console.log(data)
  return (
    <div>
      <Grid>
        <GridRow>
          <GridCell span={12}>
            <Cover className={homeStyles.cover} data={data} />
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell span={12}>
            <div className={homeStyles.titleBox}>
              <Typography use="headline5" style={{ margin: "10px" }}>
                Get amongst all this shit
              </Typography>
            </div>
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell span={3}></GridCell>
          <GridCell span={3}></GridCell>
          <GridCell span={3}></GridCell>
          <GridCell span={3}></GridCell>
        </GridRow>
        <GridRow></GridRow>
      </Grid>
      <ProductCards />
      <LargeCardContainer image={data.file.childImageSharp.fluid} />
    </div>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "HomeImage.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 500, quality: 100) {
//           ...GatsbyImageSharpFluid
//           ...GatsbyImageSharpFluidLimitPresentationSize
//         }
//       }
//     }
//   }
// `
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "HomeImage.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
