function showsidebar(){
    let x = document.querySelector(".sidebar")
    let il = document.querySelector(".icon")
    x.style.display='flex'
    i1.style.display='none'
}

function hidesidebar(){
    let x = document.querySelector(".sidebar")
    let il = document.querySelector(".icon")
    x.style.display='none'
    i1.style.display = 'flex'
}

let l = document.querySelector(".loader")

window.addEventListener("load",()=>{
    l.style.display="none"
})