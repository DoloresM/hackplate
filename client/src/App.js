import React, {Component} from 'react';
import Form from "./components/Form";
import './App.css';
import Recipes from "./components/Recipes";

const GIFT = "99f57e78fd1dd74123926711e18a9901";

class App extends Component {

  constructor(){
    super()
    this.state = {
      recipes: []
    }
  }
  getRecipe = async (e) => {
    const recipe = `vegan ${e.target.elements.recipe.value}`;
    e.preventDefault();
    const gift_call = await fetch
    (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${GIFT}&q=${recipe}`);
    {/*returning all data in gift_call and storing the json v in result*/}
    const result = await gift_call.json();
    this.setState({recipes: result.recipes});
    console.log(this.state.recipes);
  }

  componentDidMount = ()=> {
    {/*retrive the items searched from localStorage once its set/saved*/}
    const json = localStorage.getItem("recipes");
    {/*return the data back to JSON format*/}
    const recipes = JSON.parse(json);
    this.setState({recipes:recipes});

  }

  componentDidUpdate = () =>{
    {/*turn the JSON data into a  sting*/}
    const recipes = JSON.stringify(this.state.recipes);
    {/*Assign this data to localStorge by passing in a name for it and then passing in the data*/}
    localStorage.setItem("recipes", recipes);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Recipe Search</h1>
      <button>Login</button>
      <button>Sign Up</button>

      </header>
      <Form getRecipe={this.getRecipe}/>
      <Recipes incomingRecipes={this.state.recipes}/>
      </div>

  );
  }
}

export default App;
