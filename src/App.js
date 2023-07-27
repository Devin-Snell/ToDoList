// import logo from './logo.svg';
import './App.css';
import Task from './Task';
import { useState } from 'react';
function App() {
  const [todoList, setToDoList] = useState([]);

  const [newTask, setNewTask] = useState("")
  

  const handleChange = (event) => {
    setNewTask(event.target.value)
    
  }

  const addTask =()=>{
    
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
      setToDoList([...todoList, task])

  }
  const deleteTask = (id)=>{
    const newTodoList = todoList.filter((task) => task.id !== id);
    setToDoList(newTodoList)
  }
  const completeTask = (id) => {
    setToDoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }

        } else {
          
          return task;
        }
      })
    )
  }


  return (
    <div className="App">
      <div className="addTask">
        <p id='ptodo'> TODO List</p>
        <input placeholder="Write your To-Do List..." onChange={handleChange} />
        <button id='badd' onClick={addTask}> Add Task</button>
        </div>
        <p id ='listp'>List Of Works</p>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task taskName = {task.taskName}
              id={task.id}
              completed = {task.completed}
              deleteTask = {deleteTask} 
              completeTask = {completeTask}/>
            )
          
          })}

        </div>
      
    </div>
  )

}
export default App;
