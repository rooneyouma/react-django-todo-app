import { useState } from "react"
import Axios  from "axios"

const AddToDo = ({onAdd,fetch}) => {
    const[text, setText] = useState('')
    const[date, setDate] = useState('')
    


    const onSubmit = (e) =>{
        e.preventDefault()

        Axios.post("http://127.0.0.1:8000/api/Todo/",{
            text:text,
            date:date,
        }).then((res)=>{fetch(res.data)})

        if (!text){
            alert("Please Enter ToDo!")
            return
        }

        onAdd({text, date})
        
        
        setText('')
        setDate('')

    }


    return (
        <form action="" className="add-form"  onSubmit={onSubmit}>
            <div className="form-control">
                <label>ToDo</label>
                <input type="text" placeholder="Enter ToDo" value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <input type="submit" value='Add ToDo' className="btn btn-block"/>
            
        </form>
    )
}
export default AddToDo