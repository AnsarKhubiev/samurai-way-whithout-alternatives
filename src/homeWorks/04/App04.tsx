export const App04 = () => {

    const tasks = [
        {id: 1, title: 'Купить продукты на неделю', isDone: false},
        {id: 2, title: 'Полить цветы', isDone: true},
        {id: 3, title: 'Сходить на тренировку', isDone: false},
    ]

    const listOfTasks = tasks.map((task) => {
        return (
            <li key={task.id} style={{display: 'flex'}}>
                <input type="checkbox" checked={task.isDone} onChange={() =>{}}/>
                <div>{task.title}</div>
            </li>
        )
    })

    return (
        <div>
            <h1>Список дел</h1>
            <ul>
                {listOfTasks}
            </ul>
        </div>
    )
}