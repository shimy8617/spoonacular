const apiKey = "40302453062c462299983b93e3e85f00";

const baseURL = `https://api.spoonacular.com/recipes/complexSearch`;

const getDietList = async (diet) => {
  const res = await fetch(
    `${baseURL}/?apiKey=${apiKey}&diet=${diet}&addRecipeInformation=true&type&number=3`
  );
  const data = res.json();
  return data;
};

export { getDietList };
