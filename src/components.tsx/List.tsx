import { Circle, Trash } from "@phosphor-icons/react";
import { useState } from 'react'

import styles from './List.module.css';

export function List() {
    const  [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Fazer café',
            done: false
        },
        {
            id: 2,
            title: 'Lavar a louça',
            done: false
        }
    ])

    function handleRemoveTodo(commentIdToDelete: number) {
        const todoListWitouthDeleteOne = todos.filter(todo => {
            return todo.id !== commentIdToDelete 
        })
        setTodos(todoListWitouthDeleteOne)
    }




    return(
        <div className={styles.list}>
            <div className={styles.listInfo}>
                <div className={styles.boxInfo}>
                    <strong>tarefas Criadas</strong>
                    <strong className={styles.boxNumberActivit}>6</strong>
                </div>
                <div className={styles.boxInfo}>
                    <strong>Concluidas</strong>
                    <strong className={styles.boxNumberActivit}> 2 de 6</strong>
                </div>
            </div>

            
                {todos.map(todo => {

                    return (
                        <div className={styles.boxActivit}>
                            <div className={styles.activit}>
                                <button className={styles.circle}>
                                    <Circle/>
                                </button>
                                <p>{todo.title}</p>
                            </div>
                            <button onClick={() => handleRemoveTodo(todo.id)} className={styles.trash}>
                                <Trash />
                            </button>
                        </div>

                    )
                })}
        
        </div>
    )
}