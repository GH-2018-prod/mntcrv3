import { AppRouter } from './Router/AppRouter'
import { BrowserRouter } from "react-router-dom"
import './scss/styles.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}


