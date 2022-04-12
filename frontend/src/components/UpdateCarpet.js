import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'https://app-backend-nsolver.herokuapp.com/todos/';


const UpdateCarpet = ()=>{
    const navigate = useNavigate();
    const {username} = useParams();
    const [carpet, setCarpet] = useState("")
    const {id} = useParams();

    
    const getCarpetById = async () => {
        const res = await axios.get(`${URI}carpets/${username}/${id}`)  
        console.log(res.data)
        setCarpet(res.data[0].carpet)
    }
    useEffect( ()=>{
        getCarpetById()
    },[])

    const store = async (e)=>{
        e.preventDefault();
        await axios.put(`${URI}/${username}/${id}`, {carpet:carpet});
        navigate(`/${username}`)
    }
    return(<div>
        <h3>Editar todo</h3>
        <form onSubmit={store}>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input 
                    value={carpet}
                    onChange={(e)=>setCarpet(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="m-3">
                <Link to={`/${username}`} className='btn btn-primary m-2'><i className="fa-solid fa-right-from-bracket"></i></Link>
                <button type='submit' className="btn btn-primary">Actualizar</button>
            </div>
        </form>
    </div>)

}

export default UpdateCarpet;