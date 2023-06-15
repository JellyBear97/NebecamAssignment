import React from 'react';
import TodoBox from './TodoBox';

function Main({ todos, setTodos }) {
  return (
    <main className="todoList_service_main">
      <section className="workingTodo_cover todoList_servic_section">
        <h1>Working..🔥</h1>
        <ul className="todo_boxes_wrapper">
          {todos
            .filter(preTodo => {
              return preTodo.isDone === false;
            })
            .map(todo => {
              return <TodoBox key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></TodoBox>;
            })}
        </ul>
      </section>
      <section className="doneTodo_cover todoList_servic_section">
        <h1>Done..🎉</h1>
        <ul className="todo_boxes_wrapper">
          {todos
            .filter(preTodo => {
              return preTodo.isDone === true;
            })
            .map(todo => {
              return <TodoBox key={todo.id} todo={todo} todos={todos} setTodos={setTodos}></TodoBox>;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
