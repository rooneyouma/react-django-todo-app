import { useEffect, useState } from 'react'
import Axios from "axios"
import Header from './components/Header'
import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'
import Button from './components/Button'


const App = ({todo}) => {

  const [showNewToDo, setshowNewToDo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: '',
      text:'',
      date: '',
      completed:'',
    }
  ])

  const fetchData=()=>{
    Axios.get("http://127.0.0.1:8000/api/Todo/").then((res)=>{setTodos(res.data);})
    .catch(err => console.log(err))
  }
  
  useEffect(()=>{
    fetchData();
  },[]);


  const AddNew = (todo) => {

    const newTodo = {...todo}
    setTodos([...todos, newTodo])
  }

  const deleteToDo=(id)=>{

    Axios.delete(`http://127.0.0.1:8000/api/Todo/${id}`, todo)
    .then((res)=>{fetchData()}).catch(err => console.log(err))
  }




  return (
    <div className='container'>
      <Header onNew={() => setshowNewToDo(! showNewToDo) } showNew={showNewToDo}/>
      {showNewToDo && <AddToDo onAdd={AddNew} todo={todo} fetch={fetchData}/>}
      {todos.length > 0 ? (<ToDos todos={todos} onDelete={deleteToDo} fetch={fetchData}/>) : ("No ToDos Here")}
    </div>
  )
}

export default App
