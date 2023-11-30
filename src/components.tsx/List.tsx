import { Circle, Trash } from "@phosphor-icons/react";

import styles from './List.module.css';


interface todoProps {
    id: number;
    title: string;
    done: boolean;
}

interface listTodos {
    listOfTodos: todoProps[];
    setTodo: (todo: todoProps[]) => void;

}

export function List( { listOfTodos, setTodo } : listTodos) {

    function handleRemoveTodo(commentIdToDelete: number) {

        const todoListWitouthDeleteOne = listOfTodos.filter(todo => {
            return todo.id !== commentIdToDelete 
        })
        setTodo(todoListWitouthDeleteOne)
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

            
                {listOfTodos.map(todo  => {

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