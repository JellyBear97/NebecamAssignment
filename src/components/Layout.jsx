function Layout(props) {
  return (
    <div className="todoList_service_cover">
      <header className="todoList_header">
        <p>My Todo List</p>
        <p>React</p>
      </header>
      {props.children}
    </div>
  );
}

export default Layout;
