import React from "react"
import { ChipSet, Chip } from "@rmwc/chip"
import "@rmwc/chip/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"

export default () => {
  const [selected, setSelected] = React.useState({
    small: false,
    medium: false,
    large: false,
  })

  // const toggleSelected = key => {
  //   setSelected({ ...selected })
  // }

  const toggleSelected = key => {
    setSelected({
      small: false,
      medium: false,
      large: false,
      [key]: !selected[key],
    })
  }
  return (
    <ChipSet choice>
      <Chip
        selected={selected.small}
        on
        interaction={() => toggleSelected("small")}
        label="18cm"
      />
      <Chip
        selected={selected.medium}
        on
        interaction={() => toggleSelected("medium")}
        label="28cm"
      />
      <Chip
        selected={selected.large}
        on
        interaction={() => toggleSelected("large")}
        label="38cm"
      />
    </ChipSet>
  )
}
