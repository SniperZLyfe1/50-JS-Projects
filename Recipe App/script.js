const searchBtn = document.querySelector('.search')
const inputVal = document.querySelector('.search-container input')
const recipeContainer = document.querySelector('.recipe-container')
const recipeInfoContainer = document.querySelector('.recipe-detail-container')
const instructionText = document.querySelector('.instruction')
const closeBtn = document.querySelector('.close')

async function getRecipe(val){
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + val)
    const data = await res.json()
    const listOfIngreidents = []
    console.log(data)
    if(!data.meals) return alert("Recipe not found!")
    inputVal.value = ''

    for(let i = 1; i <= 20; i++){
        listOfIngreidents.push({
            amount: data.meals[0][`strMeasure${i}`],
            name: data.meals[0][`strIngredient${i}`]
        })
    }

    recipeContainer.classList.remove('hidden')

    instructionText.innerHTML = data.meals[0].strInstructions
    recipeContainer.innerHTML = `
        <div class="img-container">
        <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}">
        <div class="recipe-title-container">
            <h3>${data.meals[0].strMeal}</h3>
            <small>${data.meals[0].strArea}</small>
        </div>
        </div>
        <div class="recipe-items">
            <ul>
               ${listOfIngreidents.map(item => {
                if(!item.name|| !item.amount) return
                return `<li>${item.amount} ${item.name}</li>`
               }).join('')}
            </ul>
        </div>
        <div class="view-recipe-btn-container">
            <button class="view-recipe">View Recipe</button>
        </div>
    `

    const viewRecipe = document.querySelector('.view-recipe')

    viewRecipe.addEventListener('click',() => recipeInfoContainer.classList.remove('hidden'))
    closeBtn.addEventListener('click',() => recipeInfoContainer.classList.add('hidden'))
}


searchBtn.addEventListener('click', () => {
    if(inputVal.value === '') return alert("Input Field cannot be empty")
    recipeContainer.classList.add('hidden')
    getRecipe(inputVal.value)
})
