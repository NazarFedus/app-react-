import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";
import { Registration } from "./pages/RegistrationPage";


function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </>
  )
}

export default App;
