import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Form from './components/Form';
import Main from './components/Main';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoBody, setTodoBody] = useState('');

  return (
    <Layout>
      <Form todoTitle={todoTitle} todoBody={todoBody} setTodoTitle={setTodoTitle} setTodoBody={setTodoBody} setTodos={setTodos} todos={todos}></Form>
      <Main todos={todos} setTodos={setTodos}></Main>
    </Layout>
  );
}

export default App;
