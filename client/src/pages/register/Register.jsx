import "./register.scss"
import { Link } from "react-router-dom";
const Register = () => {
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
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register