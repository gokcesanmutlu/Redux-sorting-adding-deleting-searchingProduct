import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
