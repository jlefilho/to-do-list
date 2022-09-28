import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.taskBox}>
            <input                
                type="checkbox"
            />
            
            <p>Aqui é um exemplo de tarefa</p>
            
            <button
                className={styles.deleteButton}                
            >
                <Trash size={24}/>
            </button>
        </div>
    )
}