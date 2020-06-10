import React from "react"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import "@rmwc/grid/styles"
import FeatureCard from "../components/featureCard"

export default props => {
  const span = 4
  const width = "21rem"

  return (
    <Grid>
      {/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridRow components. */}
      <GridRow>
        <GridCell span={span} align="middle">
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
      </GridRow>
    </Grid>
  )
}
