import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const CompShowCarpets = () =>{
    const {username} = useParams();
    const [carpets, setCarpets] = useState([]);
    const URI = 'http://localhost:8000/todos/';

    useEffect(() => {
        getcarpets()
    },[])
    //mostrar carpets los carpets
    const getcarpets = async () =>{
        const carpetRes = await axios.get(`${URI}${username}`);
        setCarpets(carpetRes.data);
    }
    //eliminar un carpet
    const deletecarpet = async (id) =>{
        await axios.delete(`${URI}/${username}/${id}`);
        getcarpets();
    }

    return(
        <div className="container">

        <h1>Hola {username}</h1>
        <h2>¿Qué falta por hacer?</h2>
            <div className='row d-flex justify-content-center'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th className='text-center'>Title</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carpets.length !== 0? carpets.map((carpet) =>(
                                <tr key={ carpet.id }>
                                    <td className='text-center'><Link to={`/${username}/${carpet.carpet}`}>{ carpet.carpet }</Link></td>
                                    <td className='text-center'>
                                        <Link to={`/edit/${carpet.username}/${carpet.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deletecarpet(carpet.id)} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )):<tr>
                                    <td>No hay datos</td>
                                    <td>No hay datos</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
                <div className='container'>
                    <Link to="/" className='btn btn-primary m-2'><i className="fa-solid fa-right-from-bracket"></i></Link>
                    <Link to={`/${username}/createCarpet`} className='btn btn-primary'><i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            
        </div>
    )
    
}

export default CompShowCarpets;