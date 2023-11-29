import { PlusCircle } from "@phosphor-icons/react";
import styles from './Search.module.css';

export function Search() {
    return (
        <div className={styles.search}>
            <input  type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.button}>
                <p>Criar</p> 
                <PlusCircle size={20}/>
            </button>
        </div>
    )
}