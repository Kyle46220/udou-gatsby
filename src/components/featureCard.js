import React from "react"

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
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
const StyledTypography = styled(Typography)`
  text-align: center;
`

export default props => {
  return (
    <Card
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        margin: "1rem",
      }}
    >
      <CardPrimaryAction>
        <BackgroundImage fluid={props.image}>
          <CardMedia square />
        </BackgroundImage>

        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <StyledTypography use="headline6" tag="h2">
            Our Changing Planet
          </StyledTypography>
          {/* <Typography
            use="subtitle2"
            tag="subtitle2"
            theme="textSecondaryOnBackground"
            style={{ marginTop: "-1rem" }}
          >
            by Kurt Wagner
          </Typography> */}
          <StyledTypography
            use="body2"
            tag="div"
            theme="textSecondaryOnBackground"
          >
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </StyledTypography>
        </div>
      </CardPrimaryAction>
      {/* <CardActions>
        <CardActionButtons>
          <CardActionButton>Read</CardActionButton>
          <CardActionButton>Bookmark</CardActionButton>
        </CardActionButtons>
        <CardActionIcons>
          <CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="share" />
          <CardActionIcon icon="more_vert" />
        </CardActionIcons>
      </CardActions> */}
    </Card>
  )
}
