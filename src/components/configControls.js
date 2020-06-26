import React from "react"
import { Card, CardPrimaryAction } from "@rmwc/card"
import "@rmwc/card/styles"
import { Radio } from "@rmwc/radio"
import "@rmwc/radio/styles"
import { Switch } from "@rmwc/switch"
import "@rmwc/switch/styles"
import { Slider } from "@rmwc/slider"
import "@rmwc/slider/styles"
import { ChipSet, Chip } from "@rmwc/chip"
import "@rmwc/chip/styles"
import { Elevation } from "@rmwc/elevation"
import "@rmwc/elevation/styles"
import ControlledSlider from "../components/controlledSlider"
import Img from "gatsby-image"

import { Button } from "@rmwc/button"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import "@material/button/dist/mdc.button.css"
import { Grid, GridCell, GridRow } from "@rmwc/grid"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

// import DepthChips from "../components/threeChip"
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

  const rand = (min, max) => {
    if (max === undefined) {
      max = min
      min = 0
    }
    return min + (max - min) * Math.random()
  }

  const randomColor = () => {
    return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`
  }

  const makeColours = num => {
    return [1, 2, 3, 4].map(item => {
      const colour = randomColor()
      return (
        <GridCell
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          span={3}
          phone={1}
          tablet={2}
          key={item}
        >
          <Elevation
            style={{
              background: `${colour}`,
              height: "2rem",
              width: "2rem",
              borderRadius: "1rem",
            }}
            z={3}
          >
            <div></div>
          </Elevation>
          <Radio value={colour} name="colourRadio" key={item} />
        </GridCell>
      )
    })
  }

  const makeOptions = () => {
    return data.images.nodes
      .filter((i, index) => index < 4)
      .map(image => {
        const name = image.childImageSharp.fluid.originalName.substring(0, 4)

        return (
          <GridCell span={3} phone={1} tablet={2} key={image.id}>
            <Img fluid={image.childImageSharp.fluid} />
            <Radio value={name} name="stylePickerRadio" key={image.id}>
              <Typography use="button">{name}</Typography>
            </Radio>
          </GridCell>
        )
      })
  }
  // const sliderThumb = document.getElementsByClassName("mdc-slider__thumb")
  // console.log((sliderThumb[0].style.color = "blue"))
  // // console.log(sliderThumb.firstChild.children.innerHTML)

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
        <GridRow
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <GridCell span={3} phone={1} tablet={2}>
            <StyledTypography use="subtitle1"> Depth </StyledTypography>
          </GridCell>

          <GridCell span={9} phone={3} tablet={6} style={{ display: "flex" }}>
            {/* <DepthChips  /> */}
            <ChipSet>
              <Chip selected label="18cm" />
              <Chip label="28cm" />
              <Chip label="38cm" />
            </ChipSet>
          </GridCell>
        </GridRow>
        <GridRow>
          <GridCell
            style={{
              margin: "1rem 0 1rem 0",
              display: "flex",
              justifyContent: "flex-start",
            }}
            span={12}
            phone={4}
            tablet={8}
          >
            <Switch defaultChecked>
              {console.log(<Switch />)}
              <Typography use="subtitle1">Back Panels</Typography>
            </Switch>
          </GridCell>
        </GridRow>
        <GridRow>{makeColours()}</GridRow>
      </Grid>
    </Card>
  )
}
