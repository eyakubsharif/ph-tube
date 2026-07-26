console.log('index.js file is connected')
const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(jsonData => displayCategories(jsonData.categories))
}
const displayCategories =(categories)=>{
    const categoriesContainer =document.getElementById('categories-container')
    for(let cat of categories){
        const div = document.createElement('div')
        div.innerHTML =` 
        <button class="btn btn-sm bg-gray-400 text-white font-bold px-3 py-1">${cat.category}</button>   
    
        `
        categoriesContainer.appendChild(div)
    }
}

loadCategories()