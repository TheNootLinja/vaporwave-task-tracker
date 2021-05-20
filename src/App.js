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
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const response = await fetch('http://localhost:8080/');
    const data = await response.json();
    try {
      setLoading(false);
      setTaskList(data);
    } catch (error) {
      console.log(error);
    }
  };

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
  async function handleNewTask() {
    if (taskName === '' || taskDate === '' || taskDesc === '') {
      setShowFormError(true);
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: taskName,
          dateTime: taskDate,
          desc: taskDesc,
        }),
      };
      const response = await fetch(
        'http://localhost:8080/add-task',
        requestOptions
      );
      const data = await response.json();
      setShowNewTask(false);
      setTaskName('');
      setTaskDate('');
      setTaskDesc('');
    }
    getAPI();
  }

  async function deleteTask(e) {
    const taskId = e.target.dataset.key;
    await fetch(`http://localhost:8080/delete/${taskId}`, {
      method: 'POST',
      body: JSON.stringify({
        taskId: taskId,
      }),
    });
    getAPI();
    // const newTaskList = taskList.filter((task) => task.id !== parseInt(taskId));
    // setTaskList(newTaskList);
  }

  return (
    <div className="App">
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
