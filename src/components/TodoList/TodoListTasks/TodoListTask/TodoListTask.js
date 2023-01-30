import PropTypes from 'prop-types';

function TodoListTask({
    id, label, done, toggleTask,
}) {
    const cssClassNames = done ? 'list-item list-item--done' : 'list-item';

    const handleChange = () => {
        toggleTask(id);
    };

    return (
        <li>
            <label className={cssClassNames}>
                <input
                    type="checkbox"
                    checked={done}
                    onChange={handleChange}
                />
                {label}
            </label>
        </li>
    );
}

TodoListTask.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggleTask: PropTypes.func.isRequired,
};

export default TodoListTask;
