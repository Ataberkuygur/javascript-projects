const form = document.querySelector('.add-form');
const taskList = document.querySelector('.todos');
const searchInput = document.querySelector('.search input');

function createTemplateWithTask(task){
    let taskTemplate = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${task}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    ` 
    return taskTemplate;
}

function filterTasks(search){
    
    Array.from(taskList.children).filter((task) => {
        return !task.textContent.toLowerCase().includes(search);
    }).forEach((task) => {
        task.classList.add('filtered');
    });

    Array.from(taskList.children).filter((task) => {
        return task.textContent.toLowerCase().includes(search);
    }).forEach((task) => {
        task.classList.remove('filtered');
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let task = form.add.value.trim();
    taskList.innerHTML += createTemplateWithTask(task);
});

taskList.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

searchInput.addEventListener('keyup', e => {
    let search = searchInput.value.trim().toLowerCase();
    filterTasks(search);
});