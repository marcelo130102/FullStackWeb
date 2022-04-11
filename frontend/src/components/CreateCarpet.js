import axios from "axios";
import { useState } from "react";
import { navigate, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/todos/';

const CompCreateCarpet = ()=>{
    const navigate = useNavigate();
    const {username} = useParams();
    const [carpet, setCarpet] = useState("");
    const store = async (e)=>{
        e.preventDefault();
        await axios.post(`${URI}/${username}`, {username: username, carpet:carpet});
        navigate(`/${username}`)
    }
    return(<div>
        <h3>Crear Todo</h3>
        <form onSubmit={store}>
            <div className="mb-3">
                <label className="form-label">Nombre Carpeta</label>
                <input 
                    value={carpet}
                    onChange={(e)=>setCarpet(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <button type='submit' className="btn btn-primary">Crear</button>
        </form>
    </div>)

}

export default CompCreateCarpet;