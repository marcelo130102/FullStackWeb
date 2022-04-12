import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const URI = 'https://app-backend-nsolver.herokuapp.com/todos/validate/';

    const getUser = async (username)=>{
        const userRes = await axios.get(`${URI}${username}`)

        return userRes.data[0];
    }

    const validate = async (event)=>{
        event.preventDefault();
        const userRes = await getUser(user);

        if(userRes.pass_word === password){
            const data = userRes.username
            navigate("/"+data)
        }
        else{
            alert(`Contraseña incorrecta para ${user}`);
        }
      
    }
    return(<div>
        <h1>Bienvenido a "TodoTracker"</h1>
        
        <form onSubmit={validate}>
            <div className="mb-3">
                <label className="form-label">Username:
                    <input 
                    type="text" 
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="form-control"
                    required
                    />
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">Password:
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                    />
                </label>
            </div>
            <input className="btn btn-primary" type="submit" />
        </form>
        
    </div>)
}

export default Login;