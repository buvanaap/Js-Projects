const getmeal = document.querySelector('.get-meal')
const mealcontainer = document.getElementById('meal')

getmeal.addEventListener("click", () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(data => {
			createMeal((data.meals[0]))

		})

		.catch(err => console.log(err))

});
function createMeal(meal) {
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]}- ${meal[`strMeasure${i}`]}`);
		}
		else {
			break;
		}
	}

	const newinnerHTML = `
	       <div class="meal-container">
            <div class="meal-info">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            </div>
            <div class="meal-details">
                <h2>${meal.strMeal}</h2>
                ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags}</p>` : ''}
                ${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}

                <h3>Ingredients</h3>
                <ul>
                    ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>

                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>

                ${meal.strYoutube ? `
                <div class="video-container">
                    <h3>Video Recipe</h3>
                    <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
                </div>
            ` : ''}
            </div>
        </div>
    `;
	mealcontainer.innerHTML = newinnerHTML;

};






