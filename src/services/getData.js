const apiKey = "cd208c7ab3ff4bffa4b510347edb87e6";

const baseURL = `https://api.spoonacular.com/recipes/complexSearch`;

const getDietList = async (diet) => {
  const res = await fetch(
    `${baseURL}/?apiKey=${apiKey}&diet=${diet}&addRecipeInformation=true&typ&number=3`
  );
  const data = res.json();
  return data;
};

export { getDietList };
