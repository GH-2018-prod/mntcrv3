import { Route, Routes } from "react-router-dom"
import { Home, Teachers, Testimonios } from "../Pages"



export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Home/> }/>
        <Route path="/teachers" element={ <Teachers /> }/>
        <Route path="/testimonios" element={ <Testimonios /> }/>
        
    </Routes>
  )
}