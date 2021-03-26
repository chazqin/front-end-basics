import { v4 as uuidv4 } from 'uuid';

const initialTasks = [
  {
    title: 'Clean up files',
    project: 'Office Chores',
    id: uuidv4(),
  },
  {
    title: 'Walk dog',
    project: 'Life Chores',
    id: uuidv4(),
  },
];

const task = (
  <div className='ui centered card'>
    <div className='content'>
      <div className='header'>
        Clean up files
      </div>
      <div className='meta'>
        Office chores
      </div>
      <div className='extra content'>
        <span className='right floated edit icon'>
          <i className='edit icon' />
        </span>
        <span className='right floated trash icon'>
          <i className='trash icon' />
        </span>
      </div>
    </div>
  </div>
);

const TaskForm = (
  <div className='ui centered card'>
    <div className='content'>
      <div className='ui form'>
        <div className='field'>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className='field'>
          <label>Project</label>
          <input type='text' />
        </div>
        <div className='ui two bottom attached buttons'>
          <button className='ui basic blue button'>
            Create
          </button>
          <button className='ui basic red button'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AddButton = (
  <div className='ui basic content center aligned segment'>
    <button className='ui basic button icon'>
      <i className='plus icon' />
    </button>
  </div>
);

function App() {
  return (
    <div className='ui three column centered grid'>
      <div className='column'>
        {task}
        {TaskForm}
        {AddButton}
      </div>
    </div>
  );
}

export default App;

