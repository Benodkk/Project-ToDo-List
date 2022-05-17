import './style.css'
import contentSpread from './content.js'
import {createButtons, whatNewGroupName, addNewGroup}  from './header.js'


const content=document.querySelector('.content')



createButtons.newTask.addEventListener('click', () => {
    console.log('dupa')
})


// function addGroup(title){
//     this.title=title;

//     let newGroupp = document.createElement('div')
//     content.appendChild(newGroupp)
//     newGroupp.textContent=title;
//     newGroupp.classList.add('newGroup')

//     let newTask = document.createElement('button')
//     newGroupp.appendChild(newTask)
//     newTask.textContent="New Task"
//     newTask.classList.add('newTask')

//     newTask.addEventListener('click', () => {

    // let form = document.createElement("form");
    // form.setAttribute("method", "post");
    // form.setAttribute("action", "index.html");
    // newGroupp.appendChild(form)

    // let taskTitle = document.createElement("input");
    // taskTitle.setAttribute("type", "text");
    // taskTitle.setAttribute("name", "taskTitle");
    // taskTitle.setAttribute("placeholder", "Task Title");
    // form.appendChild(taskTitle);

//     let description = document.createElement("input");
//     description.setAttribute("type", "text");
//     description.setAttribute("name", "description");
//     description.setAttribute("placeholder", "Description");
//     form.appendChild(description);

//     let importance = document.createElement("input");
//     importance.setAttribute("type", "text");
//     importance.setAttribute("name", "importance");
//     importance.setAttribute("placeholder", "Importance");
//     form.appendChild(importance);

    // let s = document.createElement("input");
    // s.setAttribute("type", "submit");
    // s.setAttribute("value", "Submit");
    // form.appendChild(s);         
//     });


    

    // add.addEventListener('click', () => {
    //     event.preventDefault();
    //     let randomTask = document.createElement('div')
    //     newGroupp.appendChild(randomTask)
    //     randomTask.textContent='dupa'

    //     // title=form.elements['bookTitle'].value;


    //     // author=form.elements['author'].value;s
    //     // pages=form.elements['pages'].value;
    //     // readOrNot=form.elements['read'].checked;
    //     // if (readOrNot==false){
    //     //   read='Not Read'
    //     // }
    //     // else if (readOrNot==true){
    //     //   read='Read'
    //     // }
    //     // new Book(title, author, pages, read);
    //     // segregation()
    // //     // console.log(myLibrary)
    // }
    // )
// }



// const dupa = new addGroup('Maka')
// const dupaa = new addGroup('Maska')