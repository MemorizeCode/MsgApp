import axios from "axios";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import IsAuthState from '../store/auth.ts'
const Register = observer(() => {

    let [login,setLogin] = useState('')
    let [password,setpassword] = useState('')
    let [password2,setpassword2] = useState('')
    console.log('Register ', IsAuthState.auth)

    async function registerUser() {
        await axios.post('http://localhost:3000/api/auth/register',{
            login,password,password2
        })
        .then((res)=>{
            alert(res.data.message)
        })
    }

    return (<>
    
    <div>
            <h2>RESITER</h2>
            <input placeholder="Login" type="text" onChange={e=>setLogin(e.target.value)} />
            <input placeholder="Password" type="text" onChange={e=>setpassword(e.target.value)} />
            <input placeholder="Password" type="text" onChange={e=>setpassword2(e.target.value)} />
            <button onClick={registerUser}>Login</button>
        </div>
    </>);
})
 
export default Register;