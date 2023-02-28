import { Diets } from "../diets/Diets";

import "./Home";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container-fluid bodyHome">
      <h1 className="title text-center p-4">Spoonacular API</h1>
      <div className="searchRecipe text-center">
        <input className="inputSearch" placeholder="Search a recipe..." />
        <button className="buttonSearch" type="button">
          Search
        </button>
      </div>
      <div className="chooseOption text-center p-3">
        <label htmlFor="diets">Or Choose One Option:</label>
        <select name="diets" id="diets">
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Ketogenic">Ketogenic</option>
          <option value="Gluten Free">Gluten Free</option>
          <option value="Paleo">Paleo</option>
          <option value="Whole30">Whole30</option>
        </select>
      </div>
      <Diets />
    </div>
  );
};
