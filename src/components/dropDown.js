import React from "react"
import { MenuSurface, MenuSurfaceAnchor } from "@rmwc/menu"
import "@rmwc/menu/styles"
import { graphql, useStaticQuery } from "gatsby"

import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
// import { Portal } from "@rmwc/base"
import DropDownCard from "./dropdownCard"
import "@rmwc/card/styles"

const DropDown = props => {
  const [open, setOpen] = React.useState(false)
  // const [anchorCorner, setAnchorCorner] = React.useState("topLeft")
  // const [renderToPortal, setRenderToPortal] = React.useState(true)

  // export const dropDownImages = useStaticQuery(graphql`
  //   query {
  //     images: allFile(filter: { relativeDirectory: { eq: "DropDownImages" } }) {
  //       nodes {
  //         id
  //         childImageSharp {
  //           fixed {
  //             width
  //             height
  //             originalName
  //             ...GatsbyImageSharpFixed
  //           }
  //           fluid(maxWidth: 500, quality: 100) {
  //             originalName
  //             ...GatsbyImageSharpFluid
  //             ...GatsbyImageSharpFluidLimitPresentationSize
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const getCardImages = () => {
    return props.images.map(image => (
      <DropDownCard
        // title={image.childImageSharp.fluid.originalName}
        title="Product"
        key={image.id}
        fluid={image.childImageSharp.fluid}
        width="20rem"
        link={"/productIndex/"}
      />
    ))
  }

  return (
    <div>
      <MenuSurface
        open={open}
        onClose={evt => setOpen(false)}
        renderToPortal="true"
        anchorCorner="bottomLeft"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "1rem",
            overflowX: "scroll",
            width: "100vw",
          }}
        >
          {getCardImages()}
        </div>
      </MenuSurface>

      <Button raised onClick={e => setOpen(!open)}>
        Shelves
      </Button>
    </div>
  )
}
export default DropDown
