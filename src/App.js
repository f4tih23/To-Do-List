import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';



export default function App() {

  const [todolist, setTodolist] = useState([])
  const [todo, setTodo] = useState()
  const [newTodo, setNewTodo] = useState()
  const addTodo = () => {
    setTodolist((array) => [...array, { id: uuidv4(), todo: newTodo, isEdit: false, isCompleted: false }])
    setTodo("")
  setNewTodo("")

  }


  const completTodo = (id) => 
  {
    setTodolist(array => array.map(todoitem => todoitem.id === id ? { ...todoitem, isCompleted: !todoitem.isCompleted } : todoitem))
  }

  const editTodo = (id,oldTodo) => 
  {
    setTodolist(array => array.map(todoitem => todoitem.id === id ? { ...todoitem, isEdit: !todoitem.isEdit } : todoitem))
    setNewTodo(oldTodo)
  }

const saveTodo=(id)=>
{
  setTodolist(array=>array.map(todoitem=>todoitem.id===id ?{...todoitem,isEdit:!todoitem.isEdit,todo:todo}:todoitem))
  setNewTodo("")

}
const deleteTodo=(id)=>
{
  setTodolist(array=>array.filter(todoitem=>todoitem.id!==id))
}
  return (


    <div className='app'>
      <div className='container'>
        <div className='row'>
          <div className=' col-md-10 col-sm-12'>
            <div className='card d-flex justify-content-center mt-5 '>
              <h1 className='card-header text-center rounded'>Todo List</h1>
              <div className='card-body'>
                <div className='input-group-sm  d-flex'>
                  <input type="text" placeholder='add todo' className='form-control' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                  <button className='btn btn-success rounded' onClick={addTodo}>Add</button>
                </div>
                <ul className='list-group mt-2'>
                  {todolist.map(
                    (todoitem) =>
                      <li key={todoitem.id} className="list-group-item d-flex justify-content-between">
                        <div>
                          <input type="checkbox" className='me-2' value={todoitem.isCompleted} onChange={() => completTodo(todoitem.id)} />

                          {!todoitem.isEdit ? <label className={`${todoitem.isCompleted ? 'text-decoration-line-through' : ''} fw-bold`} >{todoitem.todo}</label>
                            : <input type="text" placeholder='add todo' className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} />}

                        </div>
                        <div className='icons'>{todoitem.isEdit ?
                          <button className='btn btn-outline-success btn-sm ms-1 px-2'  onClick={()=>saveTodo(todoitem.id,todoitem.todo)}><i className="fa-solid fa-floppy-disk"></i></button>
                          :
                          <button className='btn btn-outline-success btn-sm ms-1 px-2'  onClick={() => editTodo(todoitem.id,todoitem.todo)}><i className="fa-solid fa-pen-to-square"></i></button>}
                          <button className='btn btn-outline-success btn-sm px-2 ms-1' onClick={()=>deleteTodo(todoitem.id)}><i className="fa-solid fa-trash"></i></button>

                        </div>
                      </li>



                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>


  )
}


