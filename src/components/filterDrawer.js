import React from "react"
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
} from "@rmwc/drawer"
import "@rmwc/drawer/styles"
import { List, ListItem } from "@rmwc/list"
import "@rmwc/list/styles"

export default () => {
  return (
    <Drawer>
      <DrawerHeader>
        <DrawerTitle>DrawerHeader</DrawerTitle>
        <DrawerSubtitle>Subtitle</DrawerSubtitle>
      </DrawerHeader>
      <DrawerContent>
        <List>
          <ListItem>Cookies</ListItem>
          <ListItem>Pizza</ListItem>
          <ListItem>Icecream</ListItem>
        </List>
      </DrawerContent>
    </Drawer>
  )
}
