import React from 'react';

function Form({ todoTitle, todoBody, setTodoTitle, setTodoBody, setTodos, todos }) {
  const titleChangeEventHandler = event => {
    setTodoTitle(event.target.value);
  };
  const bodyChangeEventHandler = event => {
    setTodoBody(event.target.value);
  };

  const onsubmitHandler = () => {
    // check empty input
    if (Boolean(todoTitle.replaceAll(' ', '')) === false) {
      return alert('제목을 입력해주세요');
    }
    if (Boolean(todoBody.replaceAll(' ', '')) === false) {
      return alert('내용을 입력해주세요');
    }
    const id = new Date()
    const newList = [...todos, { id: id, todoTitle, todoBody, isDone: false }];
    setTodos(newList);
    setTodoTitle('');
    setTodoBody('');
  };
  return (
    <form className="todoList_form">
      <div className="todo_input">
        <label className="todoTitle_input_label">
          제목 <input type="text" name="todoTitle_input" id="todoTitle_input_id" className="formInput" value={todoTitle} onChange={titleChangeEventHandler} />
        </label>
        <label>
          내용 <input type="text" name="todoBody_input" id="todoBody_input_id" className="formInput" value={todoBody} onChange={bodyChangeEventHandler} />
        </label>
      </div>
      <button type="button" className="todoList_addBtn" onClick={onsubmitHandler}>
        추가하기
      </button>
    </form>
  );
}

export default Form;
