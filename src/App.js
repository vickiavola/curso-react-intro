import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/*
const defaultTodos = [
  { text: 'Escribir artículo', completed: true },
  { text: 'Leer sobre children', completed: false },
  { text: 'Llamar al comune', completed: false },
  { text: 'Diseñar páginas web', completed: false },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/

// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem('itemName');

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem=[];
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  // Aquí estamos guardando los TODOS en la aplicacion (con el estado de react)
  //y ademas estamos guardando en el local storage
  const saveItem = (newItem) => {
    localStorage.setItem('itemName', JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}


function App() {


  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase
      ();
      return todoText.includes(searchText);
    }
  );


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          // Forma de pasarle una función a un componente sin ejecutarla
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}

      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
