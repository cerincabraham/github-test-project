import './App.css';
import ToDo from './components/ToDo';
import AddTask from './components/AddTask';

import { useState } from 'react';


function App() {
  const today = new Date();

  const [todoArray, SetTodoArray] = useState([
    {
      id: 0,
      title: "Finished Classwork",
      status: false
    },
    {
      id: 2,
      title: "Purchase",
      status: false
    },
    {
      id: 3,
      title: "House Cleaning",
      status: false
    }
  ]);


  const addTodo = (newTodo) => {
    let dummyArray = [...todoArray, newTodo]
    SetTodoArray(dummyArray);
  };



  const MyToDoComponentsMap = todoArray.map(function (todo) {
    return <ToDo key={todo.id} title={todo.title} status={todo.status} />;
  });

  const MyToDoComponentsPush = [];
  for (const todo of todoArray) {
    MyToDoComponentsPush.push(<ToDo title={todo.title} status={todo.status} />)
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat("en-us", { weekday: "long" }).format(date);

  }

  return (
    <div className="App">
      <h1> My To-Do List </h1>
      <h3>{formatDate(today)}</h3>
      <hr />
      <section>
        <h2> To-Do List</h2>
        <div className="todo-container">
          <AddTask onAddTodo={addTodo} />
          <hr />
          {MyToDoComponentsMap}
        </div>


      </section>
    </div>
  );
}

export default App;


