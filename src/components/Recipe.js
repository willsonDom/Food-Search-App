import React, { Component } from 'react'

class Recipe extends Component {
  render() {
    const {  title, image_url, source_url, publisher} = this.props.recipe;

    
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="card m-3 " style={{width: '20vw'}}>
          <img src={image_url} alt={title} className="card-img" style={{height: '25vh'}}/>
          <div className="card-body">
              <h2 className="text-capitalize">{title}</h2>
              <p className="text-warning lead">By {publisher}</p>

            <button type="submit" className="btn btn-primary" onClick={this.props.handleDetail}>Details</button>

            <a href={source_url} className="btn btn-success mx-3 text-light" rel="noopener noreferrer" target="_blank">Recipe Url</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Recipe
