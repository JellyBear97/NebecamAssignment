import React from 'react';

function TodoBox({ todo, todos, setTodos }) {
  const onChangeHandler = (id, deleting) => {
    if (deleting) {
      const newList = todos.filter(todo => {
        return todo.id !== id;
      });
      setTodos(newList);
    } else {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          if (todo.isDone === false) {
            todo.isDone = true;
          } else {
            todo.isDone = false;
          }
        }
        return todo;
      });
      setTodos(newTodos);
    }
  };

  return (
    <li key={todo.id} className="todo_box">
      <h3>{todo.todoTitle}</h3>
      <p>{todo.todoBody}</p>
      <div className="todo_box_btns">
        <button className="todo_btn" onClick={() => onChangeHandler(todo.id, 'deleting')}>
          삭제
        </button>
        <button className="todo_btn" onClick={() => onChangeHandler(todo.id)}>
          {todo.isDone === false ? '완료' : '취소'}
        </button>
      </div>
    </li>
  );
}

export default TodoBox;
