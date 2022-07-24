import React from "react"
import Layout from "../components/layout"
import AllRecipes from "../components/all-recipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <h2>Recipes</h2>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
