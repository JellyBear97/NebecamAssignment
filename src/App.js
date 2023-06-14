import React from 'react';
import './App.css';

function App() {
  return (
    <div className="todoList_service_cover">
      <header className="todoList_header">
        <p>My Todo List</p>
        <p>React</p>
      </header>
      <form className="todoList_form">
        <div className="todo_input">
          <label className="todoTitle_input_label">
            제목 <input type="text" name="todoTitle_input" id="todoTitle_input_id" className="formInput" />
          </label>
          <label>
            내용 <input type="text" name="todoBody_input" id="todoBody_input_id" className="formInput" />
          </label>
        </div>
        <button className="todoList_addBtn">추가하기</button>
      </form>
      <main className="todoList_service_main">
        <section className="workingTodo_cover todoList_servic_section">
          <h1>Working..🔥</h1>
          <ul className="todo_boxes_wrapper">
            <li className="todo_box">
              <h3>todoTitle</h3>
              <p>todoBody</p>
              <div className="todo_box_btns">
                <button className="todo_btn">삭제</button>
                <button className="todo_btn">완료</button>
              </div>
            </li>
          </ul>
        </section>
        <section className="doneTodo_cover todoList_servic_section">
          <h1>Done..🎉</h1>
          <ul className="todo_boxes_wrapper">
            <li className="todo_box">
              <h3>todoTitle</h3>
              <p>todoBody</p>
              <div className="todo_box_btns">
                <button className="todo_btn">삭제</button>
                <button className="todo_btn">취소</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
