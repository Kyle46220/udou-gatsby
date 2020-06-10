import React from "react"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import "@rmwc/grid/styles"
import FeatureCard from "../components/featureCard"
import CardStyles from "../styles/largeCard.module.css"
import "global.css"
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default props => {
  console.log(props.image)
  return (
    <StyledContainer>
      <Grid>
        <GridCell span={6}>
          <TextArea />
        </GridCell>
        <GridCell span={6}>
          <Img fluid={props.image} />
        </GridCell>
      </Grid>
      {/* <div className={CardStyles.textArea}>
        <Typography use="headline3">What a Heading</Typography>
        <Typography use="subtitle1">What a subhead</Typography>
        <section>
          <Button raised>
            <Typography use="button1">BUTT!</Typography>
          </Button>
        </section>
      </div> */}
      {/* <div style={{ padding: "0 1rem 1rem 1rem", alignItems: "flexEnd" }}>
        <Typography use="headline6" tag="h2">
          Our Changing Planet
        </Typography>
        <Typography
          use="subtitle2"
          tag="h3"
          theme="textSecondaryOnBackground"
          style={{ marginTop: "-1rem" }}
        >
          by Kurt Wagner
        </Typography>
        <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </Typography>
        <Button raised style={{ margin: "1rem", marginLeft: "0" }}>
          <Typography use="button1">Find out more</Typography>
        </Button>
      </div> */}

      {/* <BackgroundImage fluid={props.image}>
        <div style={{ width: "500px", height: "auto" }}></div>
      </BackgroundImage> */}
    </StyledContainer>
    // <StyledContainer>
    //   <Card
    //     style={{
    //       width: `${props.width}`,
    //       height: "30VH",
    //     }}
    //   >
    //     {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
    //     <CardPrimaryAction>
    //       <BackgroundImage fluid={props.image}>
    //         <CardMedia sixteenByNine style={{ width: "200px" }} />
    //       </BackgroundImage>
    //     </CardPrimaryAction>
    //   </Card>
    //   <Card>
    //     <CardActions style={{ flexDirection: "column" }}>
    //       {/* <div style={{ padding: "0 1rem 1rem 1rem" }}>
    //       <Typography use="headline6" tag="h2">
    //         Our Changing Planet
    //       </Typography>
    //       <Typography
    //         use="subtitle2"
    //         tag="h3"
    //         theme="textSecondaryOnBackground"
    //         style={{ marginTop: "-1rem" }}
    //       >
    //         by Kurt Wagner
    //       </Typography>
    //       <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
    //         Visit ten places on our planet that are undergoing the biggest
    //         changes today.
    //       </Typography>
    //     </div> */}
    //       <CardActionButtons>
    //         <CardActionButton>Read</CardActionButton>
    //         <CardActionButton>Bookmark</CardActionButton>
    //       </CardActionButtons>
    //       <CardActionIcons>
    //         <CardActionIcon onIcon="favorite" icon="favorite_border" />
    //         <CardActionIcon icon="share" />
    //         <CardActionIcon icon="more_vert" />
    //       </CardActionIcons>
    //     </CardActions>
    //     {/* </div> */}
    //   </Card>
    // </StyledContainer>
  )
}
