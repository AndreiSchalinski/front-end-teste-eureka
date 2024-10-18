import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import ConsultaPage from "./views/ConsultaPage";
import CompartilharPage from "./views/CompartilharPage";
import LoginPage from "./views/LoginPage";
import AdminPage from "./views/AdminPage";
import AdminConsultaPage from "./views/AdminConsultaPage";
import AdminAvaliacaoPage from "./views/AdminAvaliacaoPage";
import AdminUsuariosListaPage from "./views/AdminUsuariosListaPage";
import AdminUsuarioFormPage from "./views/AdminUsuarioFormPage";

export default function AppRoutes() {
  const isAuthenticated = () => !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/index" element={<IndexPage />}></Route>
        <Route path="/index/consultar" element={<ConsultaPage />}></Route>
        <Route
          path="/index/compartilhar"
          element={<CompartilharPage />}
        ></Route>
        <Route path="/admin/login" element={<LoginPage />}></Route>
        <Route
          path="/admin/panel"
          element={
            isAuthenticated() ? <AdminPage /> : <Navigate to="/admin/login" />
          }
        ></Route>
        <Route
          path="/admin/consultar"
          element={
            isAuthenticated() ? (
              <AdminConsultaPage />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        ></Route>
        <Route
          path="/admin/avaliar"
          element={
            isAuthenticated() ? (
              <AdminAvaliacaoPage />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        ></Route>
        <Route
          path="/admin/usuario/lista"
          element={
            isAuthenticated() ? (
              <AdminUsuariosListaPage />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        ></Route>
        <Route
          path="/admin/usuario/novo"
          element={
            isAuthenticated() ? (
              <AdminUsuarioFormPage />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
