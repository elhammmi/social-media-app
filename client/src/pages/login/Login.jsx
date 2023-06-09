import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useState } from "react";
const Login = () => {
    const [inputs, setInputs]= useState({
        username: "",
        password:"",
    });
    const navigate = useNavigate();
    const[err, setErr] = useState(null);

    const handleChange = (e)=> {
        setInputs((prev)=> ({...prev,[e.target.name]: e.target.value}));
    };
    const {login} = useContext(AuthContext);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
            
        } catch (err) {
            setErr(err);
        }
    };
    console.log(err);
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ab consectetur, incidunt officia accusamus nesciunt molestias dolorem doloribus explicabo nisi eaque,
                        nobis ratione excepturi! Neque recusandae odit architecto. Assumenda, totam.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login