const fetchData =()=>{
    fetch('https://mocki.io/v1/bbd13613-0857-4fb2-8fef-3766ba3914af')
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
        
        <div onclick="showDetails(${data.id})" class="flex gap-3 mt-5 py-5 px-4 shadow-sm cursor-pointer border border-gray-100 rounded">
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

const showDetails = (id)=>{
   console.log(id)
 window.location.href = `blogDetails.html?id=${id}`;

    
}