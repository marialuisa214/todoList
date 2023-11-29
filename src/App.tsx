import { Header } from './components.tsx/Header';
import { List } from './components.tsx/List';
import './global.css'
import { Search } from './components.tsx/Search';
export function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}