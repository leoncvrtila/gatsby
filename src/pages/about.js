import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/recipes-list"

const About = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <article>
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="Person Pouring S alt in Bowl"
              className="about-img"
              placeholder="blurred"
            />
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome souce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {order: ASC, fields: title}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        cookTime
        id
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
