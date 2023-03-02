import { useState, useEffect } from "react";
import { getDietList } from "../../services/getData";

import { Spinner } from "../spinner/Spinner";

import "./Diets.css";

export const Diets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [ready, setReady] = useState(null);
  const [servings, setServings] = useState(null);
  const [types, setTypes] = useState(null);
  const [diets, setDiets] = useState(null);

  /*   useEffect(() => {
    getDietList();
  }, []); */

  useEffect(() => {
    const listOfDiets = async (diet = "vegan") => {
      const { results } = await getDietList(diet);
      results.forEach((item) => {
        setImageUrl(item.image);
        setTitle(item.title);
        setPrice(item.pricePerServing);
        setReady(item.readyInMinutes);
        setServings(item.servings);
        setTypes(item.dishTypes);
        setDiets(item.diets);
      });

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

  const listTypes = types.map((item, index) => (
    <li key={index} className="list-group">
      {item}
    </li>
  ));

  return (
    <div className="App">
      <div className="containerDiets">
        <img src={imageUrl} alt=""></img>
        <h2>{title}</h2>
        <p>${price} per serving</p>
        <p>Ready in {ready} minutes</p>
        <p>Servings: {servings}</p>
        <div className="typesList p-3">
          Dish Type:
          <ul className="list-group mt-2">{listTypes}</ul>
        </div>
        <div className="dietsList">
          Diets:
          {diets.map((item, index) => {
            return (
              <ul className="list-group">
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
