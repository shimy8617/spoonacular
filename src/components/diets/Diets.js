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

  useEffect(() => {
    getDietList();
  }, []);

  useEffect(() => {
    const listOfDiets = async (diet = "vegan") => {
      const { results } = await getDietList(diet);

      results.forEach(() => {
        setImageUrl(results[0].image);
      });
      setTitle(results[0].title);
      setPrice(results[0].pricePerServing);
      setReady(results[0].readyInMinutes);
      setServings(results[0].servings);
      setTypes(results[0].dishTypes);
      setDiets(results[0].diets);

      setIsLoading(false);
    };

    listOfDiets();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <img src={imageUrl} alt=""></img>
        <h2>{title}</h2>
        <p>${price} per serving</p>
        <p>Ready in {ready} minutes</p>
        <p>{servings}</p>
        <div className="typesList">
          Dish Type:
          {types.map((item, index) => (
            <ul className="list-group">
              <li class="list-group-item" key={index}>
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div className="dietsList">
          Diets:
          {diets.map((item, index) => (
            <ul className="list-group">
              <li className="list-group-item" key={index}>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

/* const container = document.getElementById("diets");

const listOfDiets = async (diet = "vegan") => {
  const { results } = await getDietList(diet);

  results.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `
            <img src=${item.image} alt="" />
            <h2>${item.title}</h2>
        `;
    container.appendChild(article);
  });
};

listOfDiets(); */
