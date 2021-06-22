// const panels = document.querySelectorAll('.panel')

// panels.forEach((panels) => {
// panels.addEventListener('click',() =>{
//     removeclass()
//     panels.classList.add('active')
// })
// })
// function removeclass(){
//     panels.forEach(panels =>{
//         panels.classList.remove('active')
//     })
// }
const panels = document.querySelectorAll('.panel')

panels.forEach(panels  =>{
    panels.addEventListener('click', ()=>{
        removeclasspancel()
        panels.classList.add('active')
    })
})
function removeclasspancel(){
    panels.forEach(panels =>{
        panels.classList.remove('active')
    })
}


