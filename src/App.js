import './App.scss';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {

  console.log("render app");
  return (
    <div className="App">
      <TodoForm ></TodoForm>
      <TodoList ></TodoList>
      <TodoFilters ></TodoFilters>
    </div>
  );
}

export default App;
