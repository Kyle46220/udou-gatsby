import React from "react"

import { Slider } from "@rmwc/slider"
import "@rmwc/slider/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"

export default (max, min) => {
  const [value, setValue] = React.useState(120)

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Slider
        value={value}
        onInput={e => setValue(e.detail.value)}
        max={235}
        min={30}
        step={1}
      />
      <Typography use="button">{value}cm</Typography>
    </div>
  )
}
