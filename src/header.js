import './style.css'

const header = document.querySelector('.header')



let headerSpread = (function (){
    const btnPlace = document.createElement('div')
    header.appendChild(btnPlace)
    btnPlace.classList.add('btnPlace')

    const formPlace = document.createElement('div')
    header.appendChild(formPlace)
    formPlace.classList.add('formPlace')

    return{
        btnPlace,
        formPlace
    }
})()

// creating Buttons in header

let createButtons = (function (){
    const newGroup = document.createElement('button')
    headerSpread.btnPlace.appendChild(newGroup)
    newGroup.textContent="New Group"
    newGroup.classList.add('newElBtn')

    const title = document.createElement('h1')
    headerSpread.btnPlace.appendChild(title)
    title.textContent="ToDo List"
    title.classList.add('title')
 

    const newTask = document.createElement('button')
    headerSpread.btnPlace.appendChild(newTask)
    newTask.textContent="New Task"
    newTask.classList.add('newElBtn')
    
    return{
        newGroup,
        newTask,
    }
})()

export {headerSpread, createButtons}
