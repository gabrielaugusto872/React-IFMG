import { useDispatch } from 'react-redux'
import { logout } from '../redux/UserSlice';

function Logout(){
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout;