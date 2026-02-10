import { useSelector } from "react-redux";
import { selectUser } from "../redux/UserSlice";

function Usuario(){
    const {name} = useSelector(selectUser);

    return (
        <>
            <h1>Usuário: {name}</h1>
        </>
    )
}

export default Usuario;