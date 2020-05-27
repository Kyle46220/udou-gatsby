import React from "react"
import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
const StyledButton = styled(Button)``

const Cover = props => {
  console.log(props)
  return (
    <BackgroundImage fluid={props.data.file.childImageSharp.fluid}>
      <StyledButton className={props.className}>BackgroundImg</StyledButton>
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
  justify-content: center;
  align-items: center;
`
export default StyledCover
