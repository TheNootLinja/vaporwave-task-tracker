import '../styles/NewTasks.css';

import Button from '../components/Button';

function NewTask({
  handleNewTask,
  taskName,
  handleTaskName,
  taskDate,
  handleTaskDate,
  taskDesc,
  handleTaskDesc,
  showFormError,
}) {
  return (
    <div className="form-container">
      {showFormError && <h2>Please Fill Out The Form Before Submitting!</h2>}
      <label htmlFor="task-name">Task Name</label>
      <input
        type="text"
        name="task-name"
        value={taskName}
        onChange={handleTaskName}
      />
      <label htmlFor="task-date">Task Date</label>
      <input
        type="date"
        name="task-date"
        value={taskDate}
        onChange={handleTaskDate}
      />
      <label htmlFor="task-desc">Task Description</label>
      <textarea
        name="task-desc"
        id=""
        cols="30"
        rows="10"
        value={taskDesc}
        onChange={handleTaskDesc}
      ></textarea>
      <Button
        className="neon-button submit"
        bText="Submit"
        handleClick={handleNewTask}
      />
    </div>
  );
}

export default NewTask;
