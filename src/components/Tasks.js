import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
    
      {tasks.map((task, index) => (<Task task={task} onDelete={onDelete} onToggle={onToggle} key={index} />))}
    </>
  );
};

export default Tasks;