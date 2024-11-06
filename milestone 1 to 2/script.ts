let toogleButton = document.getElementById('toogle-skills') as HTMLButtonElement
let skills = document.getElementById('skills') as HTMLElement

toogleButton.addEventListener('click',()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else{
        skills.style.display = 'none'
    }
});