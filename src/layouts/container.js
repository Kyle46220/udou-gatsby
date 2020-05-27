import React from "react"
import containerStyles from "../styles/container.module.css"
import { graphql } from "gatsby"
import Header from "../components/header"
export default ({ children }) => {
  return (
    <div className={containerStyles.container}>
      {/* <Header headerImage={this.props.data.headerImage} /> */}
      {children}
    </div>
  )
}

// export const pageQuery = graphql`
//   query HeaderImageQuery {
//     headerImage: imageSharp(id: { regex: "/header/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
