const content=document.querySelector('.content')

let contentSpread = (function() {
    const groups = document.createElement('div')
    content.appendChild(groups)
    groups.classList.add('groups')

    const tasks = document.createElement('div')
    content.appendChild(tasks)
    tasks.classList.add('tasks')
    
    return {
        groups,
        tasks
    }
})()

export default contentSpread