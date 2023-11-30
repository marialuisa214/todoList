import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";

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

    function handleDoneTodo( todoDone: todoProps) {
        const newTodoDone = {
            id: todoDone.id,
            title: todoDone.title,
            done: !todoDone.done
        }
        const newTodoList = listOfTodos.filter(todo => {
            return todo.id !== todoDone.id
        })
        newTodoList.push(newTodoDone)
        setTodo(newTodoList)
    }

    function handleRemoveTodo(todoIdToDelete: number) {

        const todoListWitouthDeleteOne = listOfTodos.filter(todo => {
            return todo.id !== todoIdToDelete 
        })
        setTodo(todoListWitouthDeleteOne)
    }

    const listOfTodosDone = listOfTodos.filter(todo => todo.done === true).length
    return(
        <div className={styles.list}>
            <div className={styles.listInfo}>
                <div className={styles.boxInfo}>
                    <strong>tarefas Criadas</strong>
                    <strong className={styles.boxNumberActivit}>{listOfTodos.length}</strong>
                </div>
                <div className={styles.boxInfo}>
                    <strong>Concluidas</strong>
                    <strong className={styles.boxNumberActivit}> { listOfTodosDone} de {listOfTodos.length}</strong>
                </div>
            </div>

            
            {listOfTodos.map(todo  => {

                
                    {if (todo.done === true) {
                        return (
                            <div className={styles.boxActivit}>
                                <div className={styles.activit}>
                                    <button className={styles.circle}>
                                        <CheckCircle color='var(--purple)'/>
                                    </button>
                                    <p><s> {todo.title}</s></p>
                                </div>
                                <button onClick={() => handleRemoveTodo(todo.id)} className={styles.trash}>
                                    <Trash />
                                </button>
                            </div>)
                    }
                    else return (
                    <div className={styles.boxActivit}>
                        <div className={styles.activit}>
                            <button onClick={ () => handleDoneTodo(todo)} className={styles.circle}>
                                <Circle/>
                            </button>
                            <p>{todo.title}</p>
                        </div>
                        <button onClick={() => handleRemoveTodo(todo.id)} className={styles.trash}>
                            <Trash />
                        </button>
                    </div>
                    )
                }
            })}
            
        </div>
    )
}