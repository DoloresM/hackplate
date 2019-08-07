import React  from "react";

import {Link} from "react-router-dom";
const Recipes = (props) => (
    <div>
      <div>
        {props.incomingRecipes.map((recipe) =>{
          return (
            <div key={recipe.id} style={{marginBottom: "2rem"}}>
              <div>
                  <img
                   src={recipe.image_url}
                   alt={recipe.title}/>
                   <div>
                      <h5>
                      {recipe.title.length < 20 ? `${recipe.title}`:
                      `${recipe.title.substring(0, 25)} ...`}
                      </h5>
                      <p>Publisher: <span>
                        {recipe.publisher}
                      </span></p>
                   </div>
                   <button>
                      <Link to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: {recipe:recipe.title}
                      }}>View Recipe</Link>
                   </button>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );

{/*state takes in a object and here its called recipe*/}

export default Recipes;
