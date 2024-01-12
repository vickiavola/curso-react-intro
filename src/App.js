import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Escribir artículo', completed: true },
  { text: 'Leer sobre children', completed: false },
  { text: 'Llamar al comune', completed: false },
  { text: 'Diseñar páginas web', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

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
          completed={todo.completed}
          text={todo.text}
        />
      ))}

      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
