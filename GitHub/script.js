

let dipslay=document.querySelector('.card')
let input=document.getElementById('input')

input.addEventListener('keyup',(e)=>{
    let a=e.target.value;
    if(e.key==="Enter"){
        temp(a)
        e.target.value=''
    }
})


async function temp(username){
    let responce=await fetch('https://api.github.com/users/'+username)
    let a=responce.json()
    a.then((data)=>{
        // console.log(data)
        let  innerHtml=`
     <div id="imgId">
    <img src="${data.avatar_url}" alt="" width="100px">
    
</div>
<div id="info">
    <h3>Name: <span>${data.name}</span></h3>
    <label for="">followers:${data.followers}</label>
    <label for="">following:${data.following}</label>
    <label for="">public_repos${data.public_repos}</label>
</div> 
    `;
    dipslay.innerHTML=innerHtml
    })
    .catch((err)=>{
        console.log(err)
        dipslay.innerHTML=`<h1>Data is Not Found</h1>`
    })
}

temp('Varunpratap74358')

