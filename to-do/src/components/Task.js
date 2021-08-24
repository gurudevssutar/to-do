
import {FaTimes} from 'react-icons/fa'
import {VscArrowRight} from 'react-icons/vsc'

const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/> </h3>
            <h4>{task.date}, {task.time}</h4>
        </div>
    )
}

export default Task