import React, { useState } from 'react'

const TaskInput = ({ addToDo }) => {
  
  const [task, setTask] = useState("")

  function handleAdd(e) {
    e.preventDefault();
    addToDo(task)
    setTask("")
  }

  return (
    <div className='max-w-96 min-h-44 h-full rounded-3xl md:bg-stone-700/20 backdrop-blur-sm md:bg-[linear-gradient(120deg,#00ff00ad_70%,rgb(255,255,255,0.6)_30%)] mb-3 mx-auto p-2'>

      <h1 className='text-center m-4 text-2xl'>Type your Task Here</h1>

      <div className='w-[310px] h-full flex mx-auto mt-2'>
        <form className='w-[310px] h-full flex mx-auto mt-2' onSubmit={handleAdd}>
        <input
          value={task}
          onInput={(e) => setTask(e.target.value)}
          type="text"
          className='p-3 outline-none border-0'
        />

        <button
          type='submit'
          className='px-6 py-2 ml-3 text-white bg-blue-500'> Add
        </button>
        </form>
      </div>
    </div>
  )
}

export default TaskInput