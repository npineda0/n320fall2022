import React from "react";

export default class RecipeSearch extends React.Component {
  state = {
    recipes: [
        "apple pie", 
        "cherry pie", 
        "pizza pie", 
        "hamburger", 
        "ham steak", 
        "chocolate mousse", 
        "chocolate ice cream"
    ] ,
    searchTerm: ""
  };

  render() {

    //pull out matching repices for search term
    let matchedRecipes = this.state.recipes.filter((recipe) => {
        return recipe
            .toLocaleUpperCase()
            .includes(this.state.searchTerm.toLocaleUpperCase());
    });

    //recipesList is the new variable for storing array as a list
    let recipesList = matchedRecipes.map((recipe) => {
        //each array item can now be listed by itself
        return <li>{recipe}</li>;
    });

    return (
      <div className="recipes">
        <h2>Recipes</h2>
        <input 
            value={this.state.searchTerm}
            onChange={(event) => { 
                this.updateSearch(event)
            }}
        />
        <ul>{recipesList}</ul>
      </div>
    );
  }

  updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  }
}