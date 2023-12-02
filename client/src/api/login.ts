import axios from "axios"


export default async function loginUser(login:string,password:string) {
    const response = await axios.post('http://localhost:3000/api/auth/login',{
        login,password
    })
    return response.data
}