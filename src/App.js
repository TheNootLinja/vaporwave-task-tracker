import Button from './components/Button';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [showNewTask, setShowNewTask] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [taskList, setTaskList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();
      try {
        console.log(data);
        setLoading(false);
        setTaskList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

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
    if (taskName === '' || taskDate === '' || taskDesc === '') {
      console.log('Form is empty, fill it out!');
      setShowFormError(true);
    } else {
      console.log(taskDate);
      const newTaskId = Math.floor(Math.random() * 9999);
      const newTask = {
        id: newTaskId,
        name: taskName,
        dateTime: taskDate,
        desc: taskDesc,
      };
      setShowNewTask(false);
      setTaskName('');
      setTaskDate('');
      setTaskDesc('');
      setTaskList([newTask, ...taskList]);
    }
  }
  function deleteTask(e) {
    console.log(e);
    const taskId = parseInt(e.target.dataset.key);
    const newTaskList = taskList.filter((task) => task.id !== parseInt(taskId));
    setTaskList(newTaskList);
  }
  return (
    <div className="App">
      <p>{taskName}</p>
      <Button
        handleClick={handleClick}
        className="neon-button add-task"
        bText={!showNewTask ? '+ Add Task' : 'Close'}
      />
      <NewTask
        showFormError={showFormError}
        handleNewTask={handleNewTask}
        taskName={taskName}
        handleTaskName={handleTaskName}
        taskDate={taskDate}
        handleTaskDate={handleTaskDate}
        taskDesc={taskDesc}
        handleTaskDesc={handleTaskDesc}
        showNewTask={showNewTask}
      />
      {taskList.length === 0 && <h2>No tasks to show!</h2>}
      {loading && <h2>Loading...</h2>}
      {taskList.reverse().map((task) => (
        <Tasks
          key={task._id}
          taskId={task._id}
          taskName={task.name}
          taskDateTime={task.dateTime}
          taskDesc={task.desc}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
