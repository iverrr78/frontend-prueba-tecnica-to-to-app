function Task({ title, description, status, onDelete, onChangeStatus }) {
    return (
        <div className="task-card">
            <h3 className="task-title">{title}</h3>
            <p className="task-description">{description}</p>
            <p className="task-status">
                Status: {status ? 'Completed' : 'Uncompleted'}
            </p>
            <div className="task-actions">
                <button className="task-delete-btn" onClick={onDelete}>
                    Delete
                </button>
                <button className="task-toggle-btn" onClick={onChangeStatus}>
                    {status === 'completed' ? 'Mark as Incomplete' : 'Mark as Completed'}
                </button>
            </div>
        </div>
    );
}

export { Task };