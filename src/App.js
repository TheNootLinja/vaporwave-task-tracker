import Button from './components/Button';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import './App.css';
import { useState } from 'react';

const taskList = [
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

function App() {
  const [showNewTask, setShowNewTask] = useState(false);
  function handleClick() {
    setShowNewTask(!showNewTask);
  }
  return (
    <div className="App">
      <Button  handleClick={handleClick} className='neon-button add-task' bText={!showNewTask ? '+ Add Task': 'Close'}/>
        {showNewTask && <NewTask />}
        {taskList.map(task => (
          <Tasks id={task.id} taskName={task.name} taskDateTime={task.dateTime} taskDesc={task.desc}/>
        ))}
        <Button className='neon-button submit' bText='Submit'/>
    </div>
  );
}

export default App;
