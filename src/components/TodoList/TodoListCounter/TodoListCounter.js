import './TodoListCounter.scss';

import PropTypes from 'prop-types';

function TodoListCounter({ tasksToDoLength }) {
    return (
        <p className="TodoListCounter">{tasksToDoLength} tâche{tasksToDoLength > 1 ? 's' : ''} en cours</p>
    );
}

TodoListCounter.propTypes = {
    tasksToDoLength: PropTypes.number.isRequired,
};

export default TodoListCounter;
