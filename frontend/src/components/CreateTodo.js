import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'https://app-backend-nsolver.herokuapp.com/todos/';


const CompCreateTodo = ()=>{
    const navigate = useNavigate();
    const {username} = useParams();
    const {carpet_u} = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const store = async (e)=>{
        e.preventDefault();
        await axios.post(`${URI}/${username}/${carpet_u}`, {username: username, carpet_u: carpet_u, title:title, content: content});
        navigate(`/${username}/${carpet_u}`)
    }
    return(<div>
        <h3>Crear Todo</h3>
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
            <button type='submit' className="btn btn-primary">Crear</button>
        </form>
    </div>)

}

export default CompCreateTodo;