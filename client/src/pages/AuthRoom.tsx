import { Navigate, Outlet } from 'react-router-dom';
import IsAuthState from '../store/auth'
import { observer } from 'mobx-react-lite';

const AuthRoom = observer(() => {
    const isauth = IsAuthState.auth //Берем статут авторизованности из state менеджера
    return (isauth ? <Outlet/>  : <Navigate to='/login'/>); //Проверям
})
 
export default AuthRoom;