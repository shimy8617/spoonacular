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
        setImageUrl(results.image);
      });
      setTitle(results.title);
      setPrice(results.pricePerServing);
      setReady(results.readyInMinutes);
      setServings(results.servings);
      setTypes(results.dishTypes);
      setDiets(results.diets);

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
  function ListItem(props) {
    return <li className="list-group">{props.value}</li>;
  }
  const listItems = types.map((item, index) => (
    <ListItem key={index} value={item} />
  ));

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
          {types.map((item) => (
            <ul className="list-group">{listItems}</ul>
          ))}
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
