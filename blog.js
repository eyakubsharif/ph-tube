const fetchData =()=>{
    fetch('./blog.json')
    .then(res => res.json())
    .then(jsonData =>displayBlog(jsonData))
}
fetchData()

const displayBlog =(datas)=>{
    const container = document.getElementById('container');
    for(let data of datas){
        console.log(data)
        const div = document.createElement('div')
        div.innerHTML = `
        
        <div class="flex gap-3 py-5 px-4 shadow-sm cursor-pointer border border-gray-100 rounded">
            <img class="w-40 h-30" src="${data.thumbnail}" alt="">
            <div>
                <p class="font-bold text-xl mb-3">${data.title}</p>
                <p class="text-sm line-clamp-2">${data.content}</p>
            </div>
        </div>
        `
        container.appendChild(div)
    }
}