const apiKey = "ef04f9ae17f34d709f92d66448e331ea";

const baseURL = `https://api.spoonacular.com/recipes/complexSearch`;

const getDietList = async (diet) => {
  const res = await fetch(
    `${baseURL}/?apiKey=${apiKey}&diet=${diet}&addRecipeInformation=true&type&number=3`
  );
  const data = res.json();
  return data;
};

export { getDietList };
