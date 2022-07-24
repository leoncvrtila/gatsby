import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
 query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        persion {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)

  return (
    <div>
      <h2>Name : {data.site.info.persion.name}</h2>

    </div>
  )
}

export default FetchData
