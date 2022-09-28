import styles from './Input.module.css'

import { PlusCircle } from 'phosphor-react'

export function Input() {
    return (        
        <form className={styles.container}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
            />            
            <button                
                type="submit"
            >
                Criar
                <PlusCircle size={32}/>
            </button>
        </form>
    )
}