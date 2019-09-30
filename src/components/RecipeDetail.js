import React, { Component } from 'react';
// import recipe from '../AllRecipeDetail';


class RecipeDetail extends Component {

  state = {
    recipe: {},
    url: `https://www.food2fork.com/api/get?key=2457ca7be8abe71bdaa59ef2fd3c4a72&rId=${this.props.id}`
  }


  componentDidMount(){
    fetch(this.state.url)
    .then(res => res.json()
    .then(data => {
      this.setState({
        recipe: data.recipe
      })
      console.log(data.recipe)
    })
    )
    .catch(err => console.log(err))
  }


  // state = {
  //   recipe: recipe
  // }

  render() {

    const {image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;

    const { handleIndex} = this.props;
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button className="btn btn-warning mb-5 text-capitalize" type="submit" 
              onClick={() => handleIndex(1)}>back to recipe list</button>

              <img src={image_url} alt={title} className="d-block w-100" />
            </div>

            <div className="col-10 mx-auto col-md-6 my-3">
              <h3 className="text-capitalize">{title}</h3>
              <h6 className="text-capitalize text-warning"> By {publisher}</h6>

              <a href={publisher_url} target="_blank" rel="noopener noreferrer"className="btn btn-primary mt-2 text-capitalize">publisher website</a>
              <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 ml-2 text-capitalize">recipe url</a>

              {/* <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {
                  ingredients.map((item, index) => {
                    return(
                      <li className="list-group-item" key={index}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul> */}
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default RecipeDetail
