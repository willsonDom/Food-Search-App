import React from 'react'
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import recipes from './AllRecipes';


class App extends React.Component {

  state = {
    url: 'https://www.food2fork.com/api/search?key=2457ca7be8abe71bdaa59ef2fd3c4a72',
    base_url: 'https://www.food2fork.com/api/search?key=2457ca7be8abe71bdaa59ef2fd3c4a72',
    query: '&q=',
    recipes: recipes,
    detail_id: 35387,
    pageIndex: 1,
    search: '',
    error: ''
  }

  getRecipes(){
   fetch(this.state.url)
    .then(res => res.json()
    .then(data => {
        if(data.recipes.length === 0){
          this.setState(() => {
            return {error: 'Sorry but this Search won\'t work !!'} 
          })
        }
        else{
              this.setState(() => {
                return {recipes: data.recipes}
              })
            }
        
        })
    )
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getRecipes();
  }

  displayPages = (index) => {
    switch(index){
      default:
      case 1:
          return(
          <RecipeList recipes={this.state.recipes} handleDetail={this.handleDetail}
          value={this.state.search}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          error={this.state.error}
          />
          );
      case 0:
        return(
         <RecipeDetail id={this.state.detail_id} api={this.state.api_key} handleIndex={this.handleIndex} />          
        );
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetail = (index, id) => {
    this.setState({
      pageIndex: index,
      detail_id: id
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url, query, search} = this.state;
    this.setState(() => {
      return {url: `${base_url}${query}${search},search:""`}
    }, () => {
      this.getRecipes();
    })
  }

  render() {
  return (
    
      <React.Fragment>
        {
          this.displayPages(this.state.pageIndex)
        }
      </React.Fragment>
    
    )
}
}

export default App
