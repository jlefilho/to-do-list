import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
    id: string
    content: string
    isDone: boolean
    onDeleteTask: (id: string) => void
    toggleIsDone: (id:string) => void
}

export function Task({ id, content, onDeleteTask, toggleIsDone }: TaskProps) {
    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleToggleIsDone(){
        toggleIsDone(id)
    }

    return (
        <div className={styles.taskBox}>
            <input
                id={id}                                     
                type="checkbox"
                className={styles.taskCheckbox}
                onClick={handleToggleIsDone}
            />
            
            <p>{content}</p>
            
            <button
                onClick={handleDeleteTask}
                className={styles.deleteButton}                
            >
                <Trash size={24}/>
            </button>
        </div>
    )
}