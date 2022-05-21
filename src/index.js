import './style.css'
import contentSpread from './content.js'
import {headerSpread, createButtons}  from './header.js'

const header = document.querySelector('.header')

let myGroups = [];
let myTasks = [];

let selectedGroup='';

// making newGroup button works

let whatNewGroupName = (function (){
    let form = document.createElement("form");
    headerSpread.formPlace.appendChild(form)

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

createButtons.newGroup.addEventListener('click', () => {
    if (newGroupBtnActive==0){
        whatNewGroupName.form.style.display = 'block';
        newGroupBtnActive=1;
      }
      else if (newGroupBtnActive==1){
        whatNewGroupName.form.style.display = 'none'
        newGroupBtnActive=0;
      }
})

function addNewGroup(){
    contentSpread.groups.textContent=''

    if (whatNewGroupName.form.elements['groupName'].value !== ''){
        myGroups.push(whatNewGroupName.form.elements['groupName'].value)
    }

    for (let i=0; i<myGroups.length; i++){
        let oneGroup = document.createElement('div')
        contentSpread.groups.appendChild(oneGroup)
        oneGroup.classList.add(`oneGroup`)

        let newGroup = document.createElement('div')
        oneGroup.appendChild(newGroup)
        newGroup.classList.add(`newGroup`)
        newGroup.textContent=myGroups[i];
        
        newGroup.addEventListener('click',()=>{
            for (let i=0; i<myGroups.length; i++){
                if (myGroups[i]==newGroup.textContent){
                    selectedGroup=newGroup.textContent;
                    segregate();
                }
            }
        })

        let delateGroup = document.createElement('button')
        oneGroup.appendChild(delateGroup)
        delateGroup.textContent='DELETE'
        delateGroup.classList.add('delateGroup')
        
        delateGroup.addEventListener('click', () => {
            let whatToDelate = myGroups[i]
            myGroups.splice(i, 1)
            addNewGroup()
        
            for(let i=0; i<myTasks.length; i++){
                if (myTasks[i]==whatToDelate){
                    myTasks.splice(i,5)
                    segregate()
                }
            }
            contentSpread.tasks.textContent='';
        })   
    }
    whatNewGroupName.form.style.display = 'none'
    newGroupBtnActive=0
    whatNewGroupName.groupName.value=''

    console.log(myGroups)
    console.log(myTasks)
};

let newGroupBtnActive=0;
whatNewGroupName.form.style.display = 'none'

whatNewGroupName.s.addEventListener('click', () => {
    event.preventDefault()
    addNewGroup()
    segregate()
})

// making newTask button works

let whatNewTaskName = (function (){
    let form = document.createElement("form");
    headerSpread.formPlace.appendChild(form)
    form.classList.add('newTaskForm')

    let taskName = document.createElement("input");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("name", "taskName");
    taskName.setAttribute("placeholder", "Task Name");
    form.appendChild(taskName);

    let taskNote = document.createElement("textarea");
    taskNote.setAttribute("type", "text");
    taskNote.setAttribute("name", "taskNote");
    taskNote.setAttribute("placeholder", "Task Note");
    taskNote.setAttribute("rows", "20");
    taskNote.setAttribute("cols", "30")
    form.appendChild(taskNote);

    let deadline = document.createElement("input");
    deadline.setAttribute("type", "date");
    deadline.setAttribute("name", "deadline");
    form.appendChild(deadline);

    let priority = document.createElement("select");
    priority.setAttribute("name", "priority");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "low");
    option1.textContent='low'
    priority.appendChild(option1)

    let option2 = document.createElement("option");
    option2.setAttribute("value", "normal");
    option2.textContent='normal'
    priority.appendChild(option2)

    let option3 = document.createElement("option");
    option3.setAttribute("value", "high");
    option3.textContent='high'
    priority.appendChild(option3)

    let option4 = document.createElement("option");
    option4.setAttribute("value", "urgent");
    option4.textContent='urgent'
    priority.appendChild(option4)

    form.appendChild(priority)

    let s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    form.appendChild(s); 

    return{
        form,
        taskName,
        s,
        priority,
    }
})()

createButtons.newTask.addEventListener('click', () => {
    if (newTaskBtnActive==0){
        whatNewTaskName.form.style.display = 'flex';
        newTaskBtnActive=1;
      }
      else if (newTaskBtnActive==1){
        whatNewTaskName.form.style.display = 'none'
        newTaskBtnActive=0;
      }
})

function addNewTask(name){
    myTasks.push(name)
    myTasks.push(whatNewTaskName.form.elements['taskName'].value)
    myTasks.push(whatNewTaskName.form.elements['taskNote'].value)
    myTasks.push(whatNewTaskName.form.elements['deadline'].value)
    myTasks.push(whatNewTaskName.priority.options[whatNewTaskName.priority.selectedIndex].value)
}

let newTaskBtnActive=0;
whatNewTaskName.form.style.display = 'none';

whatNewTaskName.s.addEventListener('click', () => {
    console.log(myTasks)
    event.preventDefault()
    addNewTask(selectedGroup)
    segregate()
})

// segregate Tasks

let editTaskBtnActive =0;

function segregate(){
    contentSpread.tasks.textContent='';
    for (let i=0; i<myTasks.length; i++){
        if(i%5==0 && myTasks[i]==selectedGroup){
            let oneTask = document.createElement('div');
            contentSpread.tasks.appendChild(oneTask);
            oneTask.classList.add('oneTask')

            let oneTitle = document.createElement('div');
            oneTask.appendChild(oneTitle);
            oneTitle.classList.add('oneTitle')
            oneTitle.textContent=myTasks[i+1]

            let oneNote = document.createElement('div');
            oneTask.appendChild(oneNote);
            oneNote.classList.add('oneNote')
            oneNote.textContent=myTasks[i+2]

            let oneDeadline = document.createElement('div');
            oneTask.appendChild(oneDeadline);
            oneDeadline.classList.add('oneDeadline')
            oneDeadline.textContent=myTasks[i+3]

            let onePriority = document.createElement('div');
            oneTask.appendChild(onePriority);
            onePriority.classList.add('onePriority')
            onePriority.textContent=myTasks[i+4]

            let delateTask = document.createElement('button')
            delateTask.textContent='DELETE'
            delateTask.classList.add('delateTask')
            oneTask.appendChild(delateTask)

            delateTask.addEventListener('click', () => {
                myTasks.splice(i, 5)
                segregate()
            })

            // creating edit task button and eform

            let editTaskBtn = document.createElement('button')
            editTaskBtn.textContent='EDIT'
            editTaskBtn.classList.add('editTaskBtn')
            oneTask.appendChild(editTaskBtn)
            
            function editThatTask(name){
                myTasks.splice(i,1,name)
                myTasks.splice(i+1,1,editTask.eform.elements['etaskName'].value)
                myTasks.splice(i+2,1,editTask.eform.elements['etaskNote'].value)
                myTasks.splice(i+3,1,editTask.eform.elements['edeadline'].value)
                myTasks.splice(i+4,1,editTask.epriority.options[editTask.epriority.selectedIndex].value)
            }

            let editTask = (function (){
                let eform = document.createElement("form");
                oneTask.appendChild(eform)
                eform.classList.add('editTaskForm')
            
                let etaskName = document.createElement("input");
                etaskName.setAttribute("type", "text");
                etaskName.setAttribute("name", "etaskName");
                etaskName.setAttribute("value", myTasks[i+1]);
                eform.appendChild(etaskName);
            
                let etaskNote = document.createElement("textarea");
                etaskNote.defaultValue=myTasks[i+2]
                etaskNote.setAttribute("type", "text");
                etaskNote.setAttribute("name", "etaskNote");
                etaskNote.setAttribute("rows", "20");
                etaskNote.setAttribute("cols", "30")
                eform.appendChild(etaskNote);
            
                let edeadline = document.createElement("input");
                edeadline.defaultValue=myTasks[i+3]
                edeadline.setAttribute("type", "date");
                edeadline.setAttribute("name", "edeadline");
                eform.appendChild(edeadline);
            
                let epriority = document.createElement("select");
                epriority.setAttribute("name", "epriority");
            
                let eoption1 = document.createElement("option");
                eoption1.setAttribute("value", "low");
                eoption1.textContent='low'
                epriority.appendChild(eoption1)
            
                let eoption2 = document.createElement("option");
                eoption2.setAttribute("value", "normal");
                eoption2.textContent='normal'
                epriority.appendChild(eoption2)
            
                let eoption3 = document.createElement("option");
                eoption3.setAttribute("value", "high");
                eoption3.textContent='high'
                epriority.appendChild(eoption3)
            
                let eoption4 = document.createElement("option");
                eoption4.setAttribute("value", "urgent");
                eoption4.textContent='urgent'
                epriority.appendChild(eoption4)

                if (myTasks[i+4]=='low'){
                    eoption1.setAttribute("selected",'selected');
                }
                if (myTasks[i+4]=='normal'){
                    eoption2.setAttribute("selected",'selected');
                }
                if (myTasks[i+4]=='high'){
                    eoption3.setAttribute("selected",'selected');
                }
                if (myTasks[i+4]=='urgent'){
                    eoption4.setAttribute("selected",'selected');
                }
            
                eform.appendChild(epriority)
            
                let es = document.createElement("input");
                es.setAttribute("type", "submit");
                es.setAttribute("value", "Submit");
                eform.appendChild(es); 
                
                return{
                    eform,
                    etaskName,
                    es,
                    epriority,
                }
            })()

            editTask.es.addEventListener('click', () => {
                event.preventDefault()
                editThatTask(selectedGroup)
                segregate()
                editTaskBtnActive=0;
            })
            editTask.eform.style.display='none'

            editTaskBtn.addEventListener('click', () => {
                if (editTaskBtnActive==0){
                    editTask.eform.style.display = 'block';
                    editTaskBtnActive=1;
                  }
                  else if (editTaskBtnActive==1){
                    editTask.eform.style.display = 'none'
                    editTaskBtnActive=0;
                  }
            })
        }
    }
}

