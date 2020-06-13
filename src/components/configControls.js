import React from "react"
import { Card, CardPrimaryAction } from "@rmwc/card"
import "@rmwc/card/styles"
import { Radio } from "@rmwc/radio"
import "@rmwc/radio/styles"
import { Switch } from "@rmwc/switch"
import "@rmwc/switch/styles"
import { Slider } from "@rmwc/slider"
import "@rmwc/slider/styles"
// import { ChipSet, Chip } from "@rmwc/chip"
// import "@rmwc/chip/styles"
import ControlledSlider from "../components/controlledSlider"
import Img from "gatsby-image"

import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import DepthChips from "../components/threeChip"
const StyledTypography = styled(Typography)`
  margin-top: 1.5rem;
`

export default props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "DropDownImages" } }) {
        nodes {
          id
          childImageSharp {
            fixed {
              width
              height
              originalName
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 500, quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)

  const makeOptions = () => {
    return data.images.nodes
      .filter((i, index) => index < 4)
      .map(image => {
        const name = image.childImageSharp.fluid.originalName.substring(0, 4)

        return (
          <GridCell span={3} phone={1} tablet={2}>
            <Img fluid={image.childImageSharp.fluid} />
            <Radio value={name} name="stylePickerRadio" key={image.id}>
              <Typography use="button">{name}</Typography>
            </Radio>
          </GridCell>
        )
      })
  }

  return (
    <Card outlined>
      <Grid>
        <GridRow style={{ margin: "1rem" }}>
          <GridCell span={6} phone={2} tablet={4}>
            <Typography use="headline3">$6969</Typography>
          </GridCell>
          <GridCell
            span={6}
            phone={2}
            tablet={4}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button>Save for later</Button>
          </GridCell>
        </GridRow>
        <GridRow>{makeOptions()}</GridRow>
        <GridRow>
          <GridCell span={12} phone={4} tablet={8}>
            <StyledTypography use="subtitle1"> Density</StyledTypography>
            <StyledTypography use="subtitle1"> </StyledTypography>

            <Slider max={240} min={30} />
          </GridCell>
          <GridCell span={12} phone={4} tablet={8}>
            <StyledTypography use="subtitle1"> Width</StyledTypography>
            <ControlledSlider max={240} min={30} />
          </GridCell>
          <GridCell span={12} phone={4} tablet={8}>
            <ControlledSlider max={240} min={30} />
          </GridCell>
        </GridRow>
        <GridRow style={{ justifyContent: "flex-end" }}>
          <GridCell span={3} phone={1} tablet={2}>
            <StyledTypography use="subtitle1"> Depth </StyledTypography>
          </GridCell>
          {/* <GridCell span={9} phone={3} tablet={6}>
            <Button>18cm</Button>
            <Button>28cm</Button>
            <Button>38cm</Button>
          </GridCell> */}
          <GridCell>
            <DepthChips />
          </GridCell>
        </GridRow>
      </Grid>
    </Card>
  )
}
