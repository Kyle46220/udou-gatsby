import React from "react"
import { MenuSurface, MenuSurfaceAnchor } from "@rmwc/menu"
import "@rmwc/menu/styles"

import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
// import { Portal } from "@rmwc/base"
import DropDownCard from "./dropdownCard"
import "@rmwc/card/styles"

function DropDown() {
  const [open, setOpen] = React.useState(false)
  // const [anchorCorner, setAnchorCorner] = React.useState("topLeft")
  const [renderToPortal, setRenderToPortal] = React.useState(true)

  return (
    <div>
      <MenuSurfaceAnchor>
        <MenuSurface
          open={open}
          onClose={evt => setOpen(false)}
          // renderToPortal="true"
          anchorCorner="bottomLeft"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "1rem",
              // width: window.innerWidth,
            }}
          >
            <DropDownCard title="BookShelves" />
            <DropDownCard />
            <DropDownCard />
            <DropDownCard />
          </div>
        </MenuSurface>

        <Button raised onClick={e => setOpen(!open)}>
          Shelves
        </Button>
      </MenuSurfaceAnchor>
    </div>
  )
}
export default DropDown
