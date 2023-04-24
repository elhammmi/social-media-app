import {useState} from "react";
import axios from "axios";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
    const [inputs, setInputs]= useState({
        username:"",
        email:"",
        password:"",
        name:""
    });
    const [err, setErr] = useState(null);
    const handleChange = (e)=>{
        setInputs((prev=> ({...prev, [e.target.name]:e.target.value})));

    }
    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
            
        } catch (err) {
            setErr(err.response.data);
        }
    };
    console.log(err);
    return (
        <div className="Register">
            <div className="card">
                <div className="left">
                    <h1>Lama Social.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ab consectetur, incidunt officia accusamus nesciunt molestias dolorem doloribus explicabo nisi eaque,
                        nobis ratione excepturi! Neque recusandae odit architecto. Assumenda, totam.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input onChange={handleChange} type="text" placeholder="Username" name="username"/>
                        <input onChange={handleChange} type="text" placeholder="Email" name="email"/>
                        <input onChange={handleChange} type="password" placeholder="Password" name="password"/>
                        <input onChange={handleChange} type="text" placeholder="Name" name="name"/>
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register