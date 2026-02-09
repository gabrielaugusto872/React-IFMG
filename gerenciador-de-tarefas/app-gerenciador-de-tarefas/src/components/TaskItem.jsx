function TaskItem ({ titulo, status }){
    return(
        <div className="task">
            <h3>{titulo}</h3>
            <p>Status: {status}</p>
        </div>
    )
    
}

export default TaskItem;