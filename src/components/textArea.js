import React from "react"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
import styled from "styled-components"

const container = styled.section``

export default props => {
  return (
    <div style={{ padding: "0 1rem 1rem 1rem", alignItems: "flexEnd" }}>
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
    </div>
  )
}
