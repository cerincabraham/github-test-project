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


  // Function to update usesate array with new task created in addtask.js.
  //Pass the function name to child component using prop and  triger it from thechild.
  const addTodo = (newTodo) => {
    let dummyArray = [...todoArray, newTodo]
    SetTodoArray(dummyArray);
  };


  //Function to delete selected task from list using triggering function from child, by passing function using props 

  const delectTodo = (deleteId) => {
    console.log("delete function callwith id: " + deleteId);
    const obectIndex = todoArray.findIndex((obj) => (obj.id === deleteId));
    console.log("Object index " + obectIndex);
    if (obectIndex > -1) {
      let dummyArray = [...todoArray];
      dummyArray.splice(obectIndex, 1);
      console.log(dummyArray);
      SetTodoArray(dummyArray);
    }
  }

  // create list/copys of components with new data from usestate array 
  //Map method
  const MyToDoComponentsMap = todoArray.map(function (todo) {
    return <ToDo key={todo.id} title={todo.title} status={todo.status} id={todo.id} delectAction={delectTodo} />;
  });

  // create list/copys of components with new data from usestate array 
  //Push method
  const MyToDoComponentsPush = [];
  for (const todo of todoArray) {
    MyToDoComponentsPush.push(<ToDo title={todo.title} status={todo.status} />)
  }


  function formatDate(date) {
    return new Intl.DateTimeFormat("en-NZ", { weekday: "long" }).format(date);

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


