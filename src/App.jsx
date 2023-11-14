import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Resumen from "./components/Landing/Resumen";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header/Header";
import DarkModeGlobal from "./context/DarkModeProvider";
import Services from "./components/Landing/Services";
import Info from './components/Landing/Info'
import ReviewsL from './components/Landing/ReviewsL'
import Login from './components/Login'
import RegisterForm from "./components/Registro";

function App() {
  return (
    <>
      <AuthProvider>
        <DarkModeGlobal>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<><Hero /><Resumen/><Services/><Info /><ReviewsL /></>} />
              <Route path="/Login" element={<><Login/></>} />
              <Route path="/Registro" element={<><RegisterForm/></>} />


            </Routes>
          </BrowserRouter>
        </DarkModeGlobal>
      </AuthProvider>
    </>
  );
}

export default App;
