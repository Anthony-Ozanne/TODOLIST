import './TodoListTasks.scss';

import PropTypes from 'prop-types';

import TodoListTask from './TodoListTask/TodoListTask';

function TodoListTasks({ tasks, toggleTask }) {
    return (
        <ul className="TodoListTasks">
            {tasks.map((task) => (
                <TodoListTask
                    key={task.id}
                    id={task.id}
                    label={task.label}
                    done={task.done}
                    toggleTask={toggleTask}
                />
            ))}
        </ul>
    );
}

TodoListTasks.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
    toggleTask: PropTypes.func.isRequired,
};

export default TodoListTasks;
