import { useState } from "react";
import loginUser from '../api/login'
import IsAuthState from '../store/auth'
const Login = () => {
    
    let [login,setLogin] = useState('')
    let [password,setpassword] = useState('')
    console.log('Login ', IsAuthState.auth)

   async function loginUser2(){
    const response = await loginUser(login,password)
       if(response.token){
        IsAuthState.authTrue()
        document.cookie = `Bearer ${response.token}`
       }
       else{
        alert(response)
       }
    }


    return (<>
        <div>
            <h2>LOGIN</h2>
            <input placeholder="Login" type="text" onChange={e=>setLogin(e.target.value)} />
            <input placeholder="Password" type="text" onChange={e=>setpassword(e.target.value)} />
            <button onClick={loginUser2}>Login</button>
        </div>
    </>);
}
 
export default Login;