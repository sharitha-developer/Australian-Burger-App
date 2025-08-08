export async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const mealData = response.json();

    if(!response.ok){
        throw new Error("Failed to fetch meal data");
    }
    return mealData;
}