import React from "react"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import "@rmwc/grid/styles"
import FeatureCard from "../components/featureCard"
import CardStyles from "../styles/largeCard.module.css"

import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardActionButton,
  CardActionButtons,
  CardActions,
  CardActionIcons,
  CardActionIcon,
} from "@rmwc/card"
import "@rmwc/card/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import { Button } from "@rmwc/button"
import "@rmwc/button/styles"

import TextArea from "../components/textArea"

import styled from "styled-components"

const StyledContainer = styled.section`
  background-color: pink;
`

export default props => {
  console.log(props.image)
  return (
    <StyledContainer>
      <Grid>
        <GridCell
          span={6}
          phone={4}
          tablet={8}
          className={CardStyles.textContainer}
        >
          <TextArea />
        </GridCell>
        <GridCell span={6}>
          <Img fluid={props.image} />
        </GridCell>
      </Grid>
    </StyledContainer>
  )
}
