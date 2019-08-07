import React from "react";

const Form = (props) => {
  return(
    <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
      <input type="text" name="recipe"/>
      <button>Search</button>
    </form>
  )
}

export default Form;
