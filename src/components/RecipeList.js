import React, { Component } from 'react';
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const { recipes, handleDetail, handleChange, handleSubmit, value, error } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
        <div className="container-fluid p-5">

          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1>recipe list</h1>
            </div>
          </div>

        <div className="row no-gutters">
          {
            error ? <h2 className="text-danger m-4">{error}</h2> :
            recipes.map(recipe => {
              return(
                  <Recipe key={recipe.recipe_id} recipe={recipe} handleDetail={() => handleDetail(0, recipe.recipe_id)} />
              )
            })
          }
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RecipeList
