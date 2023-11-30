import { PlusCircle } from "@phosphor-icons/react";
import styles from './Search.module.css';
import { FormEvent, useState } from "react";

interface todoProps {
    id: number;
    title: string;
    done: boolean;
}

interface SearchProps {
    listOfTodos: todoProps[];
    setTodo: (todo: todoProps[]) => void;
}

export function Search({ listOfTodos, setTodo}: SearchProps) {

    const [newTodo, setNewTodo] = useState('')

    function handleNewTodo(evento: FormEvent) {

        
        evento.preventDefault() 
        const teste = {
            id: Math.random(),
            title: newTodo,
            done: false
        }

        setTodo([...listOfTodos, teste])
        setNewTodo('')
    }

    return (
        <form onSubmit={handleNewTodo} className={styles.search}>
            <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} type="text" placeholder="Adicione uma nova tarefa" />
            <button type ='submit' className={styles.button}>
                <p>Criar</p> 
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}