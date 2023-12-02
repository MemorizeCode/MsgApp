import axios from "axios"
import {  useState } from "react"
import {useQuery } from "react-query"
import { useParams } from "react-router-dom"
import MyIds from '../store/id'
import { observer } from "mobx-react-lite"

//Создаем интерфейсы 
interface userL {
    login:string
}

interface msg {
    id:number,
    userId:number,
    roomId:number,
    text:string,
    delete:boolean,
    date:string,
    user:userL
}

const CurrentRoom = observer(() => {
    const {id} = useParams() //id комнаты
    const roomId = id 
    const [text,setInput] = useState('') //Input message
    const myId = MyIds.id //Мой id
    const {data:msg,refetch, error,isLoading} = useQuery<msg>(["gtm",id],getRoom,{
        retry:true,
        refetchInterval:500,
        refetchOnWindowFocus: true,
    }) //Сообщения
    let [texts,setEdit] = useState('') //Edit text
    
    if(error){
        alert(error)
    }



    async function  send() {
        sendMsg()
    }
    async function sendMsg() {
        let response = await axios.post('http://localhost:3000/api/message/sendmessage',{
            text,
            roomId
        },
        {
            headers:{
                Authorization:`${document.cookie}`
            }
        }
        )
        refetch(response.data) //Обновляем сообщения
        return response.data
    }

    async function getRoom():Promise<msg> {
        const response = await axios.get<msg>('http://localhost:3000/api/message/getMessages/',{
            params:{
                roomId:id
            },
            headers:{
                Authorization: document.cookie
            }
        })
        return response.data
    }

    async function deleteMsg(idMessage:number) {
        const response = await axios.post('http://localhost:3000/api/message/deletemessage/',{
            idMessage,
    },
            {
                headers:{
                    Authorization:document.cookie
                }
            }
        )
        refetch(response.data) //Обновляем сообщения
    }

    async function edit(idMessage:number, text:string) {
        const response = await axios.post('http://localhost:3000/api/message/editmessage/',{
            idMessage, text
    },
            {
                headers:{
                    Authorization:document.cookie
                }
            }
        )
        refetch(response.data) //Обновляем сообщения
    }




    return (<>
        <h2>Комната: {id}</h2>
        <p>Сообщения</p>
        <br />
        {
            isLoading ? "Загрузка сообщений (пример)" :
            msg?.map((e:msg)=>
            <div key={e.id} style={{border:"1px solid black", margin:"50px"}}>
                <h2>Имя: {e.user.login}</h2>
                <small>id сообщения: {e.id}</small>
                <p>Текст: {e.text}</p>
                <data>Дата: {e.date}</data>
                {
                    myId == e.userId && <button onClick={()=>deleteMsg(e.id)}>Delete</button>
                    
                }
                {
                    myId == e.userId && 
                    <div>
                        <button onClick={()=>edit(e.id,texts)}>Edit</button>
                        <input type="text" onChange={e=>setEdit(e.target.value)} />
                    </div>
                    
                }
            </div>
            )
        }
        <br />
        <input type="text" onChange={e=>setInput(e.target.value)}/>
        <button onClick={send}>Send</button>
    </>);
})
 
export default CurrentRoom;