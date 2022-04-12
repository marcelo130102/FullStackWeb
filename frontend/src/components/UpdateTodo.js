import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'https://app-backend-nsolver.herokuapp.com/todos/';


const UpdateTodo = ()=>{
    const navigate = useNavigate();
    const {username} = useParams();
    const {carpet_u} = useParams();
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const getTodoById = async () => {
        const res = await axios.get(`${URI}todo/${username}/${carpet_u}/${id}`)
        setTitle(res.data[0].title)
        setContent(res.data[0].content)
    }
    useEffect( ()=>{
        getTodoById()
    },[])

    const store = async (e)=>{
        e.preventDefault();
        await axios.put(`${URI}/${username}/${carpet_u}/${id}`, {title:title, content: content});
        navigate(`/${username}/${carpet_u}`)
    }
    return(<div>
        <h3>Editar todo</h3>
        <form onSubmit={store}>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="m-3">
                <Link to={`/${username}/${carpet_u}`} className='btn btn-primary m-2'><i className="fa-solid fa-right-from-bracket"></i></Link>
                <button type='submit' className="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>)

}

export default UpdateTodo;