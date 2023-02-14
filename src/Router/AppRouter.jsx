import { Route, Routes } from "react-router-dom"
import { Home, Teachers } from "../Pages"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Home/> }/>
        <Route path="/teachers" element={ <Teachers /> }/>
    </Routes>
  )
}
