import { useEffect, useState } from "react";
import { fetchMeals } from "../http.js";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMealdata() {
      const meals = await fetchMeals();
      setLoadedMeals(meals);
    }
    fetchMealdata();
  }, []);

  return <ul id="meals">{
    loadedMeals.map((meal) => (
        <MealItem          
        meal={meal}
         />
      
    )) 
  }</ul>;
}
