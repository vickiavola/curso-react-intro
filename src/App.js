import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Escribir artículo', completed: true },
  { text: 'Leer sobre children', completed: false },
  { text: 'Llamar al comune', completed: false },
  { text: 'Diseñar páginas web', completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
      {defaultTodos.map(todo => (
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
