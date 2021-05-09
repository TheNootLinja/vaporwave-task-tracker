import '../styles/Tasks.css';
import { FaTimesCircle } from '@react-icons/all-files/fa/FaTimesCircle';

function Tasks({ taskName, taskDateTime, taskDesc, taskId, onDelete }) {
  return (
    <div className="tasks">
      <div className="task">
        <div>
          {/* <FaTimesCircle
            className="delete-button del-icon"
            data-key={taskId}
            onClick={onDelete}
          /> */}
          <p  className="delete-button" data-key={taskId} onClick={onDelete}>X</p>
        </div>
        <p className='task-info'>{taskName}</p>
        <p className='task-info'>{taskDateTime}</p>
        <p className='task-info'>{taskDesc}</p>
      </div>
    </div>
  );
}

export default Tasks;
