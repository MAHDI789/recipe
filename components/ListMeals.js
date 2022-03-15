import React, { useEffect, useState } from "react";

function ListMeals({ singleMeals }) {
  const [mealsList, setMeals] = useState([]);
  const FetchCatg = async (s) => {
    const value = s || "beef";
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`
    );
    const { meals } = await res.json();
    setMeals(meals);
  };
  useEffect(() => {
    FetchCatg(singleMeals);
    console.log(mealsList);
  }, [singleMeals]);
  return (
    <div className="list p-4 h-80 overflow-y-scroll overflow-x-hidden">
      {mealsList.map((meal, index) => {
        const { strMealThumb, idMeal, strMeal } = meal;
        return (
          <div key={idMeal} className="mb-4 rounded-lg overflow-hidden">
            <h3 className="text-xl font-bold pb-2">
              {index + 1}-{strMeal}
            </h3>
            <img src={`${strMealThumb}`} alt={`${strMeal}`} />
          </div>
        );
      })}
    </div>
  );
}

export default ListMeals;
