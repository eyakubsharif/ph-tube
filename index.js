console.log('index.js file is connected')
const removeActiveClass =()=>{
    const buttons = document.getElementsByClassName('active');
    for(let button of buttons){
        button.classList.remove('active')
    }
}
const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(jsonData => {
        displayCategories(jsonData.categories)

       
    })
}
const displayCategories =(categories)=>{
    const categoriesContainer =document.getElementById('categories-container')
    for(let cat of categories){
        const div = document.createElement('div')
        div.innerHTML =` 
        <button id="cat-${cat.category_id}" onclick ="loadCategoriesVideo('${cat.category_id}')" class="btn btn-sm bg-gray-600 text-white font-bold px-3 py-1">${cat.category}</button>   

        `
        categoriesContainer.appendChild(div)
    }
}


loadCategories()

const loadVideo =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(jsonData =>displayVideo(jsonData.videos))
}

const displayVideo =(videos)=>{
    const videoContainer = document.getElementById('video-container');
    document.getElementById('video-container').innerHTML = ''
    if(videos.length == 0){
        videoContainer.innerHTML = `
        <div class="col-span-full py-20">
            <div class="flex flex-col justify-center items-center max-w-xl mx-auto">
        <img src="images/Icon.png" alt="">
        <h1 class="text-4xl font-bold">Oops !! There is no content here </h1>
    </div>
        </div>

        `
    }

    for(let video of videos){
        const div = document.createElement('div')
        div.innerHTML = `
            <div onclick="my_modal_2.showModal(loadDetails('${video.video_id}'))" class="card cursor-pointer">
            <img class="shadow-md rounded-xl h-40" src="${video.thumbnail}">
            <div class="flex gap-2 mt-2 ml-1">
                <img class="w-8 h-8 rounded-full" src="${video.authors[0].profile_picture}" alt="">
                <div>
                    <p class="font-semibold">${video.title}</p>
                    <p class="flex text-sm gap-2 items-center text-gray-500">${video.authors[0].profile_name}<i class="fa-solid text-blue-400 fa-certificate"></i></p>
                    <p class="text-gray-500 text-sm">${video.others.views}</p>
                </div>
            </div>
        </div>
        
        `
        videoContainer.appendChild(div)
    }
}
loadVideo()

const loadCategoriesVideo =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res=> res.json())
    .then(jsonData => displayVideo(jsonData.category))

    removeActiveClass()
     const clickBtn = document.getElementById(`cat-${id}`)
        console.log(clickBtn)
        clickBtn.classList.add('active')
}

document.getElementById('searchBtn').addEventListener('click',function(){
    const inputValue = document.getElementById('searchValue').value 
    console.log(inputValue)

    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${inputValue}`)
    .then(res =>res.json())
    .then(data =>displayVideo(data.videos))
})

document.getElementById('blogBtn').addEventListener('click',function(){
    window.location.href ='blog.html'
})

const loadDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${id}`)
    .then(res => res.json())
    .then(data => {
    
        const video =data.video
        const {thumbnail,title,authors,profile_picture,profile_name,verified,others,description}=video
        
        const container = document.getElementById('container');
        container.innerHTML =''
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
            <img class="rounded-xl bg-cover bg-center w-full h-70" src="${thumbnail}" alt="">
        <div class="">
            <h1 class="font-bold text-xl">${title} </h1>
                <div class="flex justify-between items-center gap-5 py-3">
                    <div class="flex gap-2 items-center">
                    <img class="w-12 h-12 rounded-full" src="${authors[0].profile_picture}" alt="">
                    <div>
                        <p class="font-semibold text-sm">${authors[0].profile_name}</p>
                        <p class="text-xs">250k Follower</p>
                    </div>
                    <div class="flex gap-7 ml-5">
                        <button class="btn btn-sm">${others.views}</button>
                        <button class="btn btn-sm">${others.posted_date}</button>
                    </div>
                   
                    </div>
                   
                 </div>
                  <p class="text-sm">${description}</p>
        </div>
   
        
        `
        container.appendChild(div)
    })



}