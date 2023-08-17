import { useEffect, useState } from "react"
import { FaTimes } from 'react-icons/fa'
import Axios from "axios"
import Button from "./Button"



const ToDo = ({todo, onDelete, fetch}) =>{
    const [taskcompleted, setTaskcompleted] = useState(todo.completed)
   
 
    const onClick =()=>{
        setTaskcompleted(todo.completed)
        Axios.put(`http://127.0.0.1:8000/api/Todo/${todo.id}/`,{
            text:todo.text,
            date:todo.date,
            completed: !taskcompleted,
        })
        .then((res)=>{fetch()}).catch(err => console.log(err))
    }


    return(
        <div>
            <div className="todo">
                <div className="form-control form-control-check">
                    <p className={`todo ${taskcompleted &&'completed'}`}>{todo.text}</p>
                    <p className={`todo ${taskcompleted &&'completed'}`}>{todo.date}</p>
                </div>
                <div className="todo">
                        <div className="form-control form-control-check">
                            <label>Completed</label>
                            <input type="checkbox" 
                            style={{height:'17px'}}
                            className="checkarea" 
                            onClick={onClick}
                            onChange={(e) => setTaskcompleted(e.currentTarget.checked)}
                            checked={taskcompleted}
                            />
                        </div>
                        <FaTimes style={{color:'red', cursor: 'pointer'}} 
                        onClick={() => (onDelete(todo.id))}
                        />
                </div>
                
                     
            </div>
        </div>
    )
}


export default ToDo

