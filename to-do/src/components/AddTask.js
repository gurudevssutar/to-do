import { useState } from "react"

const AddTask = ({onAdd}) => {
 
    const [text,setText]= useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [reminder,setReminder]=useState(false);

    const onSubmit =(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a Task');
            return;
        }
        onAdd({text, date, time, reminder});

        setText('');
        setDate('');
        setTime('');
        setReminder(false);
    }


    return (
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input type="text" 
                value={text} 
                onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type="time" value={time} onChange={(e)=>setTime(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className="btn btn-block" ></input><br/>
        </form>
    )
}

export default AddTask


