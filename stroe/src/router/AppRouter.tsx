import { Route, Routes } from 'react-router-dom'

import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login'
import Registr from '../Pages/Registr'
import DisplayMissiles from '../Pages/StroePage'
import HomePage from '../Pages/HomePage'


export default function AppRouter() {
  return (
   <Routes>
    <Route path='/missiles' element={<DisplayMissiles/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registr' element={<Registr/>}/>
   </Routes>
  )
}
