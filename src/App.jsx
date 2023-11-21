import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Landing/Hero";
import Resumen from "./components/Landing/Resumen";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Header/Header";
import DarkModeGlobal from "./context/DarkModeProvider";
import Services from "./components/Landing/Services";
import Info from "./components/Landing/Info";
import ReviewsL from "./components/Reviews/ReviewsL";
import Login from "./components/Login";
import RegisterForm from "./components/Registro";
import Footer from "./components/Footer";
import Precios from "./components/Reservas/Precios";
import Blog from "./components/Blog/Blog";
import ReservasForm from "./components/Reservas/Reservas";
import ProtectedRoute from "./components/ProtectedRoute";
import TablaR from "./components/Admin/TablaR";
import UserTable from "./components/Admin/TablaUsers";
import AnimatedPage from "./components/AnimatedPage";
import Profile from "./components/Profile";
import CrearArticulo from "./components/Admin/CrearArticulo";
import CrearHabitacion from "./components/Admin/CrearHabitacion";
import TablaArt from "./components/Admin/TablaArt";
import ServicesAdd from "./components/Admin/ServicesAdd";
import Habitacion from "./components/Habitaciones/Habitacion";
import TablaSer from "./components/Admin/TablaSer";
import ReviewsHab from "./components/Reviews/ReviewsHab";

function App() {
  return (
    <>
      <AuthProvider>
        <DarkModeGlobal>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <AnimatedPage>
                    <Hero />
                    <Resumen />
                    <Services />
                    <Info />
                    <ReviewsL />
                  </AnimatedPage>
                }
              />

              <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
                <Route
                  path="/Admin"
                  element={
                    <AnimatedPage>
                      <TablaR />
                      <UserTable />
                      <TablaArt />
                      <CrearArticulo />
                      <TablaSer />
                      <ServicesAdd />
                      <CrearHabitacion />
                    </AnimatedPage>
                  }
                />
              </Route>

              <Route
                element={<ProtectedRoute allowedRoles={["admin", "usuario"]} />}
              >
                <Route
                  path="/Reserva"
                  element={
                    <AnimatedPage>
                      <ReservasForm />
                      <Precios />
                      <ReviewsHab />
                    </AnimatedPage>
                  }
                />
                <Route
                  path="/Profile"
                  element={
                    <AnimatedPage>
                      <Profile />
                    </AnimatedPage>
                  }
                />
              </Route>

              <Route
                path="/Login"
                element={
                  <AnimatedPage>
                    <Login />
                  </AnimatedPage>
                }
              />
              <Route
                path="/Registro"
                element={
                  <AnimatedPage>
                    <RegisterForm />
                  </AnimatedPage>
                }
              />
              <Route
                path="/Blog"
                element={
                  <AnimatedPage>
                    <Blog />
                  </AnimatedPage>
                }
              />

              <Route
                path="/Habitacion"
                element={
                  <AnimatedPage>
                    <Habitacion />
                  </AnimatedPage>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DarkModeGlobal>
      </AuthProvider>
    </>
  );
}

export default App;
