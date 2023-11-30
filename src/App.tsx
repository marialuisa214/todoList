import { Header } from './components.tsx/Header';
import { List } from './components.tsx/List';
import './global.css'
import { Search } from './components.tsx/Search';
import { useState } from 'react';
export function App() {


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

  
  return (
    <div>
      <Header/>
      <Search listOfTodos={todos} setTodo={setTodos}/>
      <List listOfTodos={todos} setTodo={setTodos}/>
    </div>
  );
}