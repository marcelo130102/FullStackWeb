import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'




const CompShowTodos = () =>{
    const {username} = useParams();
    const {carpet_u} = useParams();
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    const URI = 'https://app-backend-nsolver.herokuapp.com/todos/';

    useEffect(() => {
        getTodos()
    },[])
    //mostrar todos los todos
    const getTodos = async () =>{
        const todoRes = await axios.get(`${URI}${username}/${carpet_u}`);
        setTodos(todoRes.data);
    }
    const completed = async (e, id, boolean)=>{
        e.preventDefault();
        await axios.put(`${URI}${username}/${carpet_u}/${id}`, {complete:boolean});
        getTodos();
        navigate(`/${username}/${carpet_u}`)

    }
    //eliminar un todo
    const deleteTodo = async (id) =>{
        await axios.delete(`${URI}/${username}/${carpet_u}/${id}`);
        getTodos();
    }

    return(
        <div className="container">

        <h1>Hola {username}</h1>
        <h2>Estamos en tu carpeta "{carpet_u}"</h2>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Completado</th>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.length !== 0? todos.map((todo) =>(
                                <tr key={ todo.id }>
                                    <td>  <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." checked={todo.complete} onChange={(e)=>(completed(e, todo.id, e.target.checked))}/></td>
                                    <td>{ todo.title }</td>
                                    <td>{ todo.content }</td>
                                    <td>
                                        <Link to={`/edit/${username}/${carpet_u}/${todo.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteTodo(todo.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )):<tr>
                                    <td>No hay datos</td>
                                    <td>No hay datos</td>
                                    <td>No hay datos</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
               <div  className='container'>
                <Link to={`/${username}`} className='btn btn-primary m-2'><i className="fa-solid fa-right-from-bracket"></i></Link>
                <Link to={`/${username}/${carpet_u}/createTodo`} className='btn btn-primary'><i className="fa-solid fa-plus"></i></Link>
               </div>
            </div>
            
        </div>
    )
    
}

export default CompShowTodos;