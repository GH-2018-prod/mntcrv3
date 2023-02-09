import { HomeCarousel } from "./HomeCarousel"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export const Home = () => {
  return (
    <>
      <header> <Header /></header>
      <main><HomeCarousel /></main>
      <footer><Footer /></footer>
    </>
  )
}