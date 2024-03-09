import React, {useState} from 'react'
import  AddTask  from './components/addTask'
import {v4 as uuidv4} from 'uuid'
import Todo from './components/task'
uuidv4();

const App = ({todos}) => {

  const [task, setTask] = useState(todos)
  const [open, setOpen] = useState(false)
  
  const addTodo = todo => {
      var tempid = task.length == 0 ? 0 : task.length + 1
      setTask([...task, {id: tempid, description: todo, completed: false}])
  }

  const changeOpen = () => {
      setOpen(!open);
  }

  const toggleCompleted = (id) => {
      setTask(task.map(task => {
          if(task.id === id) {
              return {...task, completed: !task.completed}
          } else {
              return task;
          }
      }))
  }

  const editTaskDescription = (id, newDescription) => {
    setTask(task.map(task => {
      if(task.id == id) {
        return {...task, description: newDescription}
      } else {
        return task;
      }
    }))
  }

  return (
    <>
      <h1>Simple List</h1>
      <div id="tasks">
          <ul class="tasklist">
          {task.map((todo, index) => (
              <Todo task={todo} key={index} toggleCompleted = {toggleCompleted} editTask={editTaskDescription}/>
          ))}
          {open && <AddTask addTodo={addTodo} changeOpen={changeOpen} currentDescription={""}/>}
          </ul>
          {!open && <a href="#" id="addtask" onClick={changeOpen}>Add Task</a>}
      </div>
    </>
  )
}

export default App