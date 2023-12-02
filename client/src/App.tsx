import {Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy,} from 'react';
import Auth from './pages/Auth';
import MyIds from './store/id'
const LazyLogin = lazy(()=>import('./pages/Login'))
const LazyRegister = lazy(()=>import('./pages/Register'))
const LazyRoom = lazy(()=>import('./pages/CurrentRoom'))
const LazyHello = lazy(()=>import('./pages/Hel'))
import axios from 'axios';
import AuthRoom from './pages/AuthRoom';
import IsAuthState from './store/auth'
import { observer } from 'mobx-react-lite';
import { useQuery } from 'react-query';



const App = observer(()=> {
  async function getMyId() {
    await axios.post('http://localhost:3000/api/auth/myId',{
      
    },
    {
      headers:{
        Authorization:document.cookie
      }
    })
    .then((res)=>{
      if(res.data.id){
        IsAuthState.authTrue()
        console.log("App:" , IsAuthState.auth)
        MyIds.setId(res.data.id)
      }
    })
   
  }

  const {data} = useQuery('gtid', getMyId)

  if(data){
    console.log(data)
  }

  return (
    <>{
      IsAuthState.auth == false ?
      <>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/register">Register</Link>
    </>
    :
    <>
    <Link to="/room/1">ROOM</Link>
    <br/>
    <Link to="/room/2">ROOM2</Link>
      </>
    }
    <br />
    <Link to="/hh">HH</Link>

    <Routes>
    <Route path='/hh' element={<Suspense ><LazyHello/></Suspense >}/>

      <Route element={<Auth/>}>
        <Route path='/login' element={<Suspense ><LazyLogin/></Suspense >}/>
        <Route path='/register' element={<Suspense ><LazyRegister/></Suspense >}/>
      </Route>
      <Route element={<AuthRoom/>}>
        <Route path='/room/:id' element={<Suspense ><LazyRoom/></Suspense >}/>
      </Route>

    </Routes>
    </>
  )
})

export default App
