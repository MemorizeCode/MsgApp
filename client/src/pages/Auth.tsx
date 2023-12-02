import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom";
import IsAuthState from '../store/auth'
import { observer } from "mobx-react-lite";
//Этот компонент используется чтобы авторизованные юзеры не могли заходить
//на страницу Логин и Регистер


const Auth = observer(() => {

    const isauth = IsAuthState.auth //Берем статут авторизованности из state менеджера
    return (isauth ? <Navigate to='/hh' /> : <Outlet/>); //Проверям
})
 
export default Auth;