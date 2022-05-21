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
    newGroup.classList.add('newGroupBtn')

    const newTask = document.createElement('button')
    headerSpread.btnPlace.appendChild(newTask)
    newTask.textContent="New Task"
    newTask.classList.add('newTaskBtn')
    
    return{
        newGroup,
        newTask,
    }
})()

export {headerSpread, createButtons}
