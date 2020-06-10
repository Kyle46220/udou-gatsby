import React from "react"

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent,
  CardActions,
  CardActionIcons,
  CardActionIcon,
} from "@rmwc/card"
import "@rmwc/card/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import Img from "gatsby-image"

export default props => {
  console.log(props.fluid)
  return (
    <Card style={{ width: "1000px", margin: "0.3vw" }}>
      <CardPrimaryAction>
        <CardMedia square>
          <CardMediaContent>
            <Img fluid={props.fluid} />
          </CardMediaContent>
        </CardMedia>
      </CardPrimaryAction>
      <CardActions>
        <Typography
          use="headline6"
          tag="div"
          style={{
            padding: "1rem",
            backgroundImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
            bottom: "0",
            left: "0",
            right: "0",
            position: "absolute",
          }}
        >
          {props.title}
        </Typography>
        <CardActionIcons>
          {/* <CardActionIcon onIcon="favorite" icon="favorite_border" />
          <CardActionIcon icon="bookmark_border" />
          <CardActionIcon icon="share" /> */}
        </CardActionIcons>
      </CardActions>
    </Card>
  )
}
