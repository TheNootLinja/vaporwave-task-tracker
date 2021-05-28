import '../styles/Tasks.css';

function Tasks({ taskName, taskDateTime, taskDesc, taskId, onDelete, onEdit }) {
  return (
    <div className="tasks">
      <div className="task">
        <div>
          <p  className="delete-button" data-key={taskId} onClick={onDelete}>X</p>
        </div>
        <p className='task-info'>{taskName}</p>
        <p className='task-info'>{taskDateTime}</p>
        <p className='task-info'>{taskDesc}</p>
        <img onClick={onEdit} className='edit-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Red_pencil.svg/768px-Red_pencil.svg.png' alt='' />
      </div>
    </div>
  );
}

export default Tasks;
