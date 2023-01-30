import './TodoListForm.scss';

import PropTypes from 'prop-types';

function TodoListForm({ newTaskLabel, setNewTaskLabel, addTask }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask();
    };

    const handleChange = (event) => {
        setNewTaskLabel(event.target.value);
    };

    return (
        <form className="TodoListForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-item"
                placeholder="Ajouter une tâche"
                value={newTaskLabel}
                onChange={handleChange}
            />
        </form>
    );
}

TodoListForm.propTypes = {
    newTaskLabel: PropTypes.string.isRequired,
    setNewTaskLabel: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
};

export default TodoListForm;
