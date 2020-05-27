import React from "react"
import { Link } from "gatsby"
import DropDown from "../components/dropDown"
import {
  TopAppBar,
  SimpleTopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarActionItem,
} from "@rmwc/top-app-bar"
// import {
//   SimpleMenu,
//   MenuItem,
//   Menu,
//   ListDivider,
//   MenuSurfaceAnchor,
// } from "@rmwc/menu"

import "@rmwc/top-app-bar/styles"
import { Icon } from "@rmwc/icon"
import "@rmwc/icon/styles"
import "@rmwc/menu/styles"
import { Button } from "@rmwc/button"
import "@rmwc/button/styles"
import { Typography } from "@rmwc/typography"
import "@rmwc/typography/styles"
import { IconButton } from "@rmwc/icon-button"
import "@rmwc/icon-button"
import { Portal } from "@rmwc/base"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Typography use="headline6">
      <Link style={{ textShadow: "none", underline: "none" }} to={props.to}>
        {props.children}
      </Link>
    </Typography>
  </li>
)

export default () => {
  return (
    <div>
      <TopAppBar title="UDOU">
        <TopAppBarRow>
          <TopAppBarSection>
            <Link to="/">
              <TopAppBarTitle>UDOU</TopAppBarTitle>
            </Link>
          </TopAppBarSection>
          <TopAppBarSection>
            <DropDown></DropDown>
          </TopAppBarSection>

          <TopAppBarSection>
            <ul>
              <ListLink to="/">Shelves</ListLink>
              <ListLink to="/">About</ListLink>
              <ListLink to="/">Contact</ListLink>
            </ul>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  )
}
