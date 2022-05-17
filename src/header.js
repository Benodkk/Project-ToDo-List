import contentSpread from './content.js'

const header = document.querySelector('.header')
let myGroups = [];

// creating Button in header

let createButtons = (function (){
    const newGroup = document.createElement('button')
    header.appendChild(newGroup)
    newGroup.textContent="New Group"

    const newTask = document.createElement('button')
    header.appendChild(newTask)
    newTask.textContent="New Task"
    
    return{
        newGroup,
        newTask,
    }
})()

// making newGroup button works

let whatNewGroupName = (function (){
    let form = document.createElement("form");
    header.appendChild(form)

    let groupName = document.createElement("input");
    groupName.setAttribute("type", "text");
    groupName.setAttribute("name", "groupName");
    groupName.setAttribute("placeholder", "Group Name");
    form.appendChild(groupName);

    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    form.appendChild(s); 

    return{
        form,
        groupName,
        s
    }
})()

function addNewGroup(){
    let newGroup = document.createElement('div')
    contentSpread.groups.appendChild(newGroup)
    newGroup.classList.add('newGroup')

    myGroups.push(whatNewGroupName.form.elements['groupName'].value)

    contentSpread.groups.textContent=''
    for (let i=0; i<myGroups.length; i++){
        let newGroup = document.createElement('div')
        contentSpread.groups.appendChild(newGroup)
        newGroup.classList.add('newGroup')
        newGroup.textContent+=myGroups[i];
    }
    whatNewGroupName.form.style.display = 'none'
    newBookBtnActive=0
    whatNewGroupName.groupName.value=''
    console.log(myGroups)
}

let newBookBtnActive=0;
whatNewGroupName.form.style.display = 'none'

createButtons.newGroup.addEventListener('click', () => {
    if (newBookBtnActive==0){
        whatNewGroupName.form.style.display = 'block';
        newBookBtnActive=1;
      }
      else if (newBookBtnActive==1){
        whatNewGroupName.form.style.display = 'none'
        newBookBtnActive=0;
      }
})

whatNewGroupName.s.addEventListener('click', () => {
    event.preventDefault()
    addNewGroup()
})


export {createButtons,whatNewGroupName, addNewGroup}
