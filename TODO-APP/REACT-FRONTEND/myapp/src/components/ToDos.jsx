import ToDo from "./ToDo"


const ToDos = ({todos, onDelete, onnewEdit, fetch}) =>{
    
    return (
        <>
            {todos.map((todo) => (<ToDo key={todo.id} todo={todo} todos={todos}
            onDelete={onDelete} fetch={fetch} onnewEdit={onnewEdit} ></ToDo>))}
        </>
    )
}
export default ToDos