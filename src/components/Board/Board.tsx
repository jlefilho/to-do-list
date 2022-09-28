import { Task } from "../Task/Task"

import styles from './Board.module.css'

export function Board() {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>5</span>
                </div>
                <div>
                    <p className={styles.doneTitle}>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.tasks}>
                <Task />
                <Task />
                <Task />
                <Task />                
            </div>

        </section>
    )
}