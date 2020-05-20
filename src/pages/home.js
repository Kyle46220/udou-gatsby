import React from "react"
import Container from "../components/container"
import { Button } from "@rmwc/button"
import "@material/button/dist/mdc.button.css"

export default Home = () => {
  return (
    <Container>
      This my home content
      <Button>Hello world!</Button>
    </Container>
  )
}
