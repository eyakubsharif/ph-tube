const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

fetch('https://mocki.io/v1/bbd13613-0857-4fb2-8fef-3766ba3914af')
.then(res => res.json())
.then(data =>{
    const singleData = data.find((blog)=>blog.id == blogId)
    console.log(singleData)

    const container = document.getElementById('details-container')

    const div =document.createElement('div')
    div.innerHTML = `
         <div class="p-5">
            <img src="${singleData.thumbnail}" alt="">
            <div>
                <p class="font-bold text-xl py-2">${singleData.title}</p>
                <p>${singleData.content}</p>
           
                <div class="flex gap-3 items-center justify-end">
                    <p class="font-semibold text-sm" >Like ${singleData.likes}</p>
                    <p class="font-semibold text-sm">View ${singleData.views}</p>
                    <p class="font-semibold text-sm">Date ${new Date().toLocaleTimeString()}</p>
                </div>   
             </div>
            

        </div>
    
    `
container.appendChild(div)
})