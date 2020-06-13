import React from "react"
import { ChipSet, Chip } from "@rmwc/chip"
import "@rmwc/chip/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"

export default () => {
  const [selected, setSelected] = React.useState({
    "18cm": false,
    "28cm": false,
    "38cm": true,
  })

  const toggleSelected = key => {
    setSelected({ ...selected, [key]: !selected[key] })
  }
  return (
    <ChipSet choice>
      <Chip
        selected={selected[0]}
        on
        interaction={() => toggleSelected("18cm")}
        label="18cm"
      />
      <Chip
        selected={selected[1]}
        on
        interaction={() => toggleSelected("18cm")}
        label="18cm"
      />
      <Chip
        selected={selected[2]}
        on
        interaction={() => toggleSelected("18cm")}
        label="18cm"
      />
    </ChipSet>
  )
}
