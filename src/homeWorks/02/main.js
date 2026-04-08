
const tasks = [
    {title: 'Купить продукты на неделю', isDone: false},
    {title: 'Полить цветы', isDone: true},
    {title: 'Сходить на тренировку', isDone: false},
]

const root = document.querySelector('#root')

const titleEl = document.createElement('h1')
titleEl.append('Список дел')
root.append(titleEl)

const tasksEl = document.createElement('ul')
root.append(tasksEl)

tasks.forEach(task => {
    const taskEl = document.createElement('li')
    taskEl.style.display = 'flex'

    const taskIsDoneEl = document.createElement('input')
    taskIsDoneEl.type = 'checkbox'
    taskIsDoneEl.checked = task.isDone
    taskEl.append(taskIsDoneEl)

    const taskTitleEl = document.createElement('div')
    taskTitleEl.append(task.title)
    taskEl.append(taskTitleEl)

    tasksEl.append(taskEl)
})