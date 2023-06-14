import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  // const [doneTodos, setDoneTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoBody, setTodoBody] = useState('');
  // const [isDone, setIsDone] = useState('');
  const titleChangeEventHandler = event => {
    setTodoTitle(event.target.value);
  };
  const bodyChangeEventHandler = event => {
    setTodoBody(event.target.value);
  };
  const addClickEventHandler = () => {
    // if (Boolean(todoTitle.replaceAll(' ', '')) === false && Boolean(todoBody.replaceAll(' ', '')) === false) {
    //   return alert('입력해주세요');
    // }
    if (Boolean(todoTitle.replaceAll(' ', '')) === false) {
      return alert('제목을 입력해주세요');
    }
    if (Boolean(todoBody.replaceAll(' ', '')) === false) {
      return alert('내용을 입력해주세요');
    }
    const newList = [...todos, { id: todos.length, todoTitle, todoBody, isDone: false }];
    setTodos(newList);
    setTodoTitle('');
    setTodoBody('');
  };
  // const completeTodo = (id) => {
  //   // isDone을 true로 가지는 배열. 만들어야함 (위에서!)
  //   // isDone을 true로 가지는 배열 추가....?
  //   const DoneList = [...doneTodos]
  //   // todos에서 isDone이 false인 값들을 다시 todos에 넣어줘야함.
  // }
  const changeState = (id, changedState) => {
    console.log(todos);
    console.log(id, changedState);
    if (changedState === 'delete') {
      const newList = todos.filter(todo => {
        return todo.id !== id;
      });
      console.log(newList);
      setTodos(newList);
    }
    if (changedState === 'onstage') {
      const workbenchTodos = [...todos];
      workbenchTodos.forEach(workbenchTodo => {
        if (workbenchTodo.id === id) {
          workbenchTodo.isDone = false;
          return setTodos(workbenchTodos);
        }
      });
    }
    if (changedState === 'done') {
      const workbenchTodos = [...todos];
      workbenchTodos.forEach(workbenchTodo => {
        if (workbenchTodo.id === id) {
          workbenchTodo.isDone = true;
          setTodos(workbenchTodos);
          console.log(todos);
        }
      });
    }
  };
  return (
    <div className="todoList_service_cover">
      <header className="todoList_header">
        <p>My Todo List</p>
        <p>React</p>
      </header>
      <form className="todoList_form">
        <div className="todo_input">
          <label className="todoTitle_input_label">
            제목 <input type="text" name="todoTitle_input" id="todoTitle_input_id" className="formInput" value={todoTitle} onChange={titleChangeEventHandler} />
          </label>
          <label>
            내용 <input type="text" name="todoBody_input" id="todoBody_input_id" className="formInput" value={todoBody} onChange={bodyChangeEventHandler} />
          </label>
        </div>
        <button type="button" className="todoList_addBtn" onClick={addClickEventHandler}>
          추가하기
        </button>
      </form>
      <main className="todoList_service_main">
        <section className="workingTodo_cover todoList_servic_section">
          <h1>Working..🔥</h1>
          <ul className="todo_boxes_wrapper">
            {todos
              .filter(preTodo => {
                return preTodo.isDone === false;
              })
              .map(todo => {
                return (
                  <li key={todo.id} className="todo_box">
                    <h3>{todo.todoTitle}</h3>
                    <p>{todo.todoBody}</p>
                    <div className="todo_box_btns">
                      <button className="todo_btn" onClick={() => changeState(todo.id, 'delete')}>
                        삭제
                      </button>
                      <button className="todo_btn" onClick={() => changeState(todo.id, 'done')}>
                        완료
                      </button>
                    </div>
                  </li>
                );
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
                return (
                  <li key={todo.id} className="todo_box">
                    <h3>{todo.todoTitle}</h3>
                    <p>{todo.todoBody}</p>
                    <div className="todo_box_btns">
                      <button className="todo_btn" onClick={() => changeState(todo.id, 'delete')}>
                        삭제
                      </button>
                      <button className="todo_btn" onClick={() => changeState(todo.id, 'onstage')}>
                        취소
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
