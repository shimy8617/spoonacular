import { useState, useEffect } from "react";
import { getDietList } from "../../services/getData";

import { Spinner } from "../spinner/Spinner";

import "./Diets.css";

export const Diets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);

  /*   useEffect(() => {
    getDietList();
  }, []); */

  useEffect(() => {
    const listOfDiets = async (diet = "vegan") => {
      const { results } = await getDietList(diet);

        setRecipe(results);
        console.log(recipe);

      setIsLoading(false);
    };

    listOfDiets();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="containerDiets">
        {recipe.map(({id,image,title}) => {
          return (
            <div>
              <img key={id} src={image} alt="" />
               <h2>{title}</h2>
              {/*<p>${item.price} per serving</p>
              <p>Ready in {item.ready} minutes</p>
              <p>Servings: {item.servings}</p>
              <div className="typesList p-3">
                Dish Type:
                {item.dishTypes.map((type, index) => (
                  <ul className="list-group mt-2">
                    <li key={index}>{type}</li>
                  </ul>
                ))}
              </div>
              <div className="dietsList">
                Diets:
                {item.diets.map((item, index) => {
                  return (
                    <ul className="list-group">
                      <li className="list-group-item" key={index}>
                        {item}
                      </li>
                    </ul>
                  );
                })} 
              </div>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
};
