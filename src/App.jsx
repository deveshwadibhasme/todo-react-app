import { useState } from 'react';
import BGImage from '../src/assets/bg-img.png';
import Completed from './component/Completed';
import ToDoList from './component/ToDoList';
import TaskInput from './component/TaskInput';

const App = () => {

  const [todo, setTodo] = useState([])

  const addToDo = (task) => {
    setTodo([...todo, {
      id: Math.floor(Math.random() * 100),
      text: task,
      completed: false,
      isEditing: false
    }])
  }

  console.log(todo);

  return (
    <div
      style={{ backgroundImage: `url(${BGImage})` }}
      className='max-w-screen-xl w-full min-h-screen h-full bg-no-repeat bg-cover [font-family:"Noto_Serif",sans-serif] overflow-y-scroll'>

      <h1 className='text-3xl font-semibold m-2 text-slate-900'>My To Do List</h1>

      <div className='w-[98%] md:w-[95%] h-[90%] mx-auto my-0'>

        <TaskInput
          addToDo={addToDo}
        />
        <div className='flex justify-between flex-col md:flex-row items-center w-full min-h-72 h-full'>

          <div className='max-w-96 w-[100%] md:w-[60%] min-h-72 h-full bg-orange-400/30 backdrop-blur-lg mb-3 mx-auto p-2'>
            <h1 className='text-lg text-center'>To Do List</h1>
            <ul className='m-3 w-[95%]'>
              {
                todo.map((todo, i) => (
                  <ToDoList
                    key={i}
                    todoTask={todo}
                  />
                ))
              }
            </ul>
          </div>
          <Completed
          />                           {/* Add for completed tasks */}
        </div>
      </div>
    </div>

  )
}

export default App