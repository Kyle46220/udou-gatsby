import React from "react"
import { Grid, GridRow, GridCell } from "@rmwc/grid"
import "@rmwc/grid/styles"
import FeatureCard from "../components/featureCard"
import CardStyles from "../styles/largeCard.module.css"
import LargeCard from "../components/largeCard"

export default props => {
  return (
    <div className={CardStyles.background}>
      <Grid style={{ width: "100%" }}>
        <GridRow style={{ width: "100%" }}>
          <GridCell span={12}>
            {/* <FeatureCard width="100%" image={props.image} /> */}
            <LargeCard width="100%" image={props.image} />
          </GridCell>
        </GridRow>
      </Grid>
    </div>
  )
}
