import React from "react"
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header"
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer"
import "./styles/app.css"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}
