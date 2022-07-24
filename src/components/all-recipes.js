import React from "react"
import TagsList from "./tags-list"
import RecipesList from "./recipes-list"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { order: ASC, fields: title }) {
      nodes {
        cookTime
        id
        title
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
