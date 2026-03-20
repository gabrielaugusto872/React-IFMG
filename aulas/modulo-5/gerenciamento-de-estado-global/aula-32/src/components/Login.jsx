import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/UserSlice";

function Login (){
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e) =>
    {
        e.preventDefault();
        dispatch(changeUser(name));
        setName("");
    }

    const grava = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <form>
                <h1>Login</h1>
                <input 
                type="text"
                placeholder="Nome"
                value={name}
                onChange={grava}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </>
    )
}

export default Login;