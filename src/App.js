import Button from './components/Button';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import './App.css';
import { useState } from 'react';

function App() {
  const [ taskName, setTaskName ] = useState('');
  const [ taskDate, setTaskDate ] = useState('');
  const [ taskDesc, setTaskDesc ] = useState('');
  const [ showNewTask, setShowNewTask ] = useState(false);
  const [ showFormError, setShowFormError ] = useState(false)
  const [ taskList, setTaskList ] = useState(
    [
      {
        id: 1,
        name: 'task1',
        dateTime: '02/01/2021',
        desc: 'task1 description',
      },
      {
        id: 2,
        name: 'task2',
        dateTime: '02/01/2021',
        desc: 'task2 description',
      },
      {
        id: 3,
        name: 'task3',
        dateTime: '02/01/2021',
        desc: 'task3 description',
      },
      {
        id: 4,
        name: 'task4',
        dateTime: '02/01/2021',
        desc: 'task4 description',
      },
      {
        id: 5,
        name: 'task5',
        dateTime: '02/01/2021',
        desc: 'task1 description',
      },
      {
        id: 6,
        name: 'task6',
        dateTime: '02/01/2021',
        desc: 'task2 description',
      },
      {
        id: 7,
        name: 'task7',
        dateTime: '02/01/2021',
        desc: 'task3 description',
      },
      {
        id: 8,
        name: 'task8',
        dateTime: '02/01/2021',
        desc: 'task4 description',
      },
    ]
  )
  function handleTaskName(e) {
    setTaskName(e.target.value);
  }
  function handleTaskDate(e) {
    setTaskDate(e.target.value);
  }
  function handleTaskDesc(e) {
    setTaskDesc(e.target.value);
  }
  function handleClick() {
    setShowFormError(false);
    setShowNewTask(!showNewTask);
  }
  function handleNewTask() {
    if(taskName === '' || taskDate === '' || taskDesc === '' ) {
      console.log('Form is empty, fill it out!')
      setShowFormError(true);
    }
    else {
      console.log(taskDate);
      const newTaskId = Math.floor(Math.random() * 9999);
      const newTask = {
        id: newTaskId,
        name: taskName,
        dateTime: taskDate,
        desc: taskDesc
      }
      setShowNewTask(false);
      setTaskName('');
      setTaskDate(null);
      setTaskDesc('');
      setTaskList([ newTask, ...taskList])
    }
  };
  function deleteTask(e) {
    const taskId = parseInt(e.target.dataset.key);
    const newTaskList = taskList.filter(task => task.id !== parseInt(taskId));
    setTaskList(newTaskList);
  };
  return (
    <div className="App">
              <p>{taskName}</p>
      <Button  handleClick={handleClick} className='neon-button add-task' bText={!showNewTask ? '+ Add Task': 'Close'}/>
        {showNewTask 
        && 
        <NewTask  
          showFormError={showFormError}
          handleNewTask={handleNewTask} 
          taskName={taskName}
          handleTaskName={handleTaskName}
          taskDate={taskDate}
          handleTaskDate={handleTaskDate}
          taskDesc={taskDesc}
          handleTaskDesc={handleTaskDesc}
          />
        }
        {taskList.reverse().map(task => (
          <Tasks key={task.id} taskId={task.id} taskName={task.name} taskDateTime={task.dateTime} taskDesc={task.desc} onDelete={deleteTask}/>
        ))}
    </div>
  );
}

export default App;