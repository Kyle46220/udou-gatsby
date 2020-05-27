import React from "react"
import Container from "../layouts/container"
import { Button } from "@rmwc/button"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell } from "@rmwc/grid"
import Cover from "../components/coverButton"
import Img from "gatsby-image"
import "@rmwc/grid/styles"
import { useStaticQuery, graphql } from "gatsby"
import homeStyles from "../styles/home.module.css"

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
      <Cover className={homeStyles.cover} data={data} />
      <Img fluid={data.file.childImageSharp.fluid}>
        <Button style={{ zIndex: "22" }}>Img</Button>
      </Img>
      <Grid>
        <GridCell span={12}>
          <Button>Cover</Button>
          <Cover data={data} />
        </GridCell>
        <GridCell span={6}></GridCell>
        <GridCell
          span={12}
          style={{ backgroundImage: "data.file.childImageSharp.fluid" }}
        >
          {/* <Img title="HomeImage" alt="interior" sizes={props.HomeImage.sizes} /> */}
          {/* <Img fixed={data.file.childImageSharp.fixed} /> */}

          {/* <Img
            // style={{ width: "100%" }}
            fluid={data.file.childImageSharp.fluid}
          /> */}
        </GridCell>
      </Grid>
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
