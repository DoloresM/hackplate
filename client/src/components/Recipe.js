import React, {Component} from "react";
import {Link} from "react-router-dom";

const GIFT = "99f57e78fd1dd74123926711e18a9901";

class Recipe extends Component {
  state ={
    activeRecipe: []
  }

  componentDidMount = async () =>{
    const title = this.props.location.state.recipe;
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${GIFT}&q=${title}`);
    {/*returning all data in gift_call and storing the json v in result*/}
    const response = await request.json();
    this.setState({activeRecipe: response.recipes[0]});
    console.log(this.state.activeRecipe);
  }

  render(){
    const recipe = this.state.activeRecipe;
    return(
      <div>
        {this.state.activeRecipe.length !==0 &&
          <div>
            <img src={recipe.image_url} alt={recipe.title}/>
            <h3>{recipe.title}</h3>
            <h4>
              Publisher: <span>{recipe.publisher} </span>
            </h4>
            <p>Website:
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}></a></span>
            </p>
            <button>
              <Link to="/">Go Home </Link>
            </button>
          </div>
        }
      </div>

    );
  }
}

export default Recipe;
