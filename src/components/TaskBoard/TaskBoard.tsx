import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Task } from "../Task/Task"
import { PlusCircle } from 'phosphor-react'
import clipboard from '../../assets/clipboard.svg'

import styles from './TaskBoard.module.css'

interface TaskProps {
    id: string
    content: string
    isDone: boolean
}

export function TaskBoard() {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    const [taskText, setTaskText] = useState('')

    const [doneTasks, setDoneTasks] = useState(Number)

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()        

        const newTask = {
            id: uuidv4(),
            content: taskText,
            isDone: false
        }
        
        setTasks([...tasks, newTask])
        setTaskText('')
    }

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setTaskText(event.target.value)        
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function toggleIsDone(id: string) {
        tasks.map(task => {
            if (task.id === id) {
                task.isDone = !task.isDone
            }
        })

        handleDoneTasks()
    }

    function handleDoneTasks() {
        let count = 0
        tasks.filter(task => {
            if (task.isDone) {
                count++
            }
        })

        setDoneTasks(count)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id!== taskToDelete
        })

        tasks.map(task =>{
            if (task.id === taskToDelete && task.isDone){
                task.isDone = false
            }
                       
        })

        handleDoneTasks()

        setTasks(tasksWithoutDeletedOne)
    }

    return (
        <main className={styles.wrapper}>
            {/* INPUT */}
            <form
                onSubmit={handleCreateNewTask}
                className={styles.inputContainer}
            >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={taskText}
                    onChange={handleTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />            
                <button
                    disabled={taskText.length === 0}         
                    type="submit"
                >
                    Criar
                    <PlusCircle size={32}/>
                </button>
            </form>
            {/* TASKS */}
            <section className={styles.taskContainer}>
                <header className={styles.header}>
                    <div>
                        <p>Tarefas Criadas</p>
                        <span>{tasks.length}</span>
                    </div>
                    <div>
                        <p className={styles.doneTitle}>Concluídas</p>
                        <span>{doneTasks} de {tasks.length}</span>
                    </div>
                </header>
                <div className={styles.tasks}>
                    {tasks.length > 0 ? (
                        tasks.map(task => {
                            return (
                                <Task
                                    id={task.id}
                                    content={task.content}
                                    key={task.id}
                                    onDeleteTask={deleteTask}
                                    toggleIsDone={toggleIsDone}
                                    isDone={task.isDone}         
                                />
                            )
                        })
                    ) : (
                        <article className={styles.emptyTasks}>
                            <div className={styles.tasksContainer}>
                                <img src={clipboard} />
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </article>
                    )
                }         
                </div>
            </section>
        </main>
    )
}