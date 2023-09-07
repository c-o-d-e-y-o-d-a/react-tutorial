import './App.css';
import React, { useState } from 'react';

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTaskInList = () => {
    const newToDoList = [...todoList, newTask];
    setToDoList(newToDoList);
    setNewTask(''); // Clear the input field after adding a task
  };

  const removeTask = (taskArg) => {
    const newArr = todoList.filter((task) => task !== taskArg);
    setToDoList(newArr);
  };

  return (
    <div className='TodoLIst-container'>
      <div className='addTasks'>
        <input type="text" value={newTask} onChange={handleChange} />
        <button className='addTask' onClick={addTaskInList}>
          Add Task
        </button>
      </div>
      <div className='task-list'>
        {todoList.map((task, ind) => (
          <div className='task' key={ind}>
            <div className='indexval'>{ind}</div>
            <div className='task-content'>{task}</div>
            <div className='button'>
              <button onClick={() => removeTask(task)}>Remove task</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





































//  const [count, setCount] = useState(0);
//   return (
//     <div className='App'>
//       <h1>{count}</h1>
//       <button className='butt' onClick={()=>{setCount(count+1)}}>Increase by 1</button>
//       <button className='butt' onClick={()=>{setCount(count-1)}}>Decrease by 1</button>
//       <button className='butt' onClick={()=>{setCount(0)}}>Set to 0</button>
     


      
//     </div>
//   )


  // const[showText,setShowText] = useState(true);


  // return(
  //   <div className='App'>
  //     <button className='butt' onClick={() =>{
  //   setShowText(!showText);
  // }}>Show/Hide</button>
  //     <h1>doijfoi</h1>
  //     {showText ? "now you can see":''}
      

      
  //   </div>
  // )
  













// CAN BE USED WITH FORMS
// const [name,setName] = useState('Nischal');
//   const changeName = (event) =>{
//     setName(event.target.value);
//   };
//   return (
//     <div className='App'>

//       <input type="text" onChange={changeName} />
//       <h1>Hello ,{name}</h1>
      

//     </div>
//   )





// function App() {
//   const [count,setCount] = useState(0);
//   const IncAge = () =>{
//     setCount(count + 1);
//   }
//   const DecAge = () =>{
//     setCount(count-1);
//   }
 
 
//   return (
//     <div className="App">
//       <h1 style={{color:'black'}}>Value rn is- {count}</h1>
//      <button onClick={IncAge} style={{fontSize:'2rem',border:'none',background:'white'}}>Tap Here To Increment value by one</button>
//       <button onClick={DecAge} style={{fontSize:'2rem',border:'none',background:'white',marginTop:'2dvh'}}>Tap Here To Decrement value by one</button>

      
//     </div>
//   );
// }

export default App;
