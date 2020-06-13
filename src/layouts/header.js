import React from "react"
import { Link, useStaticQuery, graphql, StaticQuery } from "gatsby"
import DropDown from "../components/dropDown"
import {
  TopAppBar,
  SimpleTopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarActionItem,
  TopAppBarNavigationIcon,
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
import { MenuSurfaceAnchor } from "@rmwc/menu"

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
  const dropDownImages = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "DropDownImages" } }) {
        nodes {
          id
          childImageSharp {
            fixed {
              width
              height
              originalName
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 500, quality: 100) {
              originalName
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <MenuSurfaceAnchor>
        <TopAppBar title="UDOU">
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <Link to="/">
                <TopAppBarNavigationIcon icon="menu" />
              </Link>
              <TopAppBarTitle>UDOU</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection>
              <DropDown images={dropDownImages.images.nodes} />
            </TopAppBarSection>
            {/* <TopAppBarSection alignEnd>
              <ul>
                <ListLink to="/">Shelves</ListLink>
                <ListLink to="/">About</ListLink>
                <ListLink to="/">Contact</ListLink>
              </ul>
            </TopAppBarSection> */}
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="favorite" />
              <TopAppBarActionItem icon="star" />
              <TopAppBarActionItem icon="mood" />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </MenuSurfaceAnchor>
    </div>
  )
}
