import React from 'react';
import './TodoForm.css';

function TodoForm() {
  return(
    <form onSubmit={(event) =>{
      event.preventDefault();
    }}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder="Aprender React"
      />
      <div className="TodoForm-buttonContainer">
        <button
        type=""
        className="TodoForm-button
        TodoForm-button--cancel"
        >Cancelar</button>

        <button
        type=""
        className="TodoForm-button
        TodoForm-button--add"
        >Añadir</button>
      </div>

    </form>
  )
}

export { TodoForm };