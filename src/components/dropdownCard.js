import React from "react"
import { Link } from "gatsby"

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardActions,
  CardActionIcons,
  CardActionIcon,
  CardActionButtons,
} from "@rmwc/card"
import "@rmwc/card/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
const StyledCardActionButtons = styled(CardActionButtons)`
  background: lightblue;
`

export default props => {
  console.log(props.fluid)
  return (
    <Card style={{ width: "1000px", margin: "0.5rem" }}>
      <CardPrimaryAction>
        <BackgroundImage fluid={props.fluid}>
          <CardMedia square />
        </BackgroundImage>

        <CardMediaContent></CardMediaContent>
      </CardPrimaryAction>
      <CardActions
        style={{
          background: "pink",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <StyledCardActionButtons style={{ backgroundColor: "pink" }}>
          <Link to="/productIndex/">
            <Typography
              use="button"
              tag="div"
              style={{
                textAlign: "center",
              }}
            >
              {props.title}
            </Typography>
          </Link>
        </StyledCardActionButtons>
      </CardActions>
    </Card>
  )
}
