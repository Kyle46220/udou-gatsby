import React from "react"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import "@rmwc/grid/styles"
import FeatureCard from "../components/featureCard"

export default props => {
  const span = 3
  const phone = 4
  const tablet = 4
  const desktop = 3
  const width = "100%"

  return (
    <Grid>
      {/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridRow components. */}
      <GridRow>
        <GridCell span={span} phone={phone} tablet={tablet} desktop={desktop}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span} phone={phone} tablet={tablet} desktop={desktop}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span} phone={phone} tablet={tablet} desktop={desktop}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
        <GridCell span={span} phone={phone} tablet={tablet} desktop={desktop}>
          <FeatureCard image={props.image} width={width} />
        </GridCell>
      </GridRow>
    </Grid>
  )
}
