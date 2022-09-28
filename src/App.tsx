import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Board } from "./components/Board/Board";

import './global.css'
import styles from './App.module.css'

export function App() { 
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Input />
        <Board />

      </div>

    </div>
  )
}

