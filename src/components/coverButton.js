import React from "react"
import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
const StyledButton = styled(Button)``
const StyledTypography = styled(Typography)`
  margin: 5px;
`

const Cover = props => {
  console.log(props)
  return (
    <BackgroundImage
      className={props.className}
      fluid={props.data.file.childImageSharp.fluid}
    >
      {" "}
      <StyledTypography style={{ paddingBottom: "10px" }} use="headline3">
        Built To Fit
      </StyledTypography>
      <StyledTypography use="headline4" style={{ paddingBottom: "10px" }}>
        Experience the difference
      </StyledTypography>
      <StyledButton raised>Get Yours</StyledButton>
    </BackgroundImage>
  )
}

const StyledCover = styled(Cover)`
  width: 100%;
  height: 500px;
  border: 1px solid pink;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default StyledCover
