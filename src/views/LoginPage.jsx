import "../styles/indexPages/consultaPage.css";
import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonAccess from "../components/ButtonAccess";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        usuario,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200) {
        const data = response.data;
        // Armazena o token JWT no localStorage
        localStorage.setItem("token", data.token);
        // Redireciona para uma página protegida
        window.location.href = "/admin/panel";
      } else {
        setMensagem("Usuário ou senha incorretos");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMensagem("Usuário ou senha incorretos");
      } else {
        setMensagem("Erro interno, contatar admin de sistema!");
      }
      console.error("Erro na autenticação:", error);
    }
  };

  const sections = (
    <div>
      <section>
        <Header
          showButtonLogin={false}
          showButtonLogout={false}
          showButtonUsuarios={false}
        />
      </section>
      <section className="container-form-login">
        <form onSubmit={handleLogin}>
          <Input
            type={"text"}
            label={"Usuário"}
            name={"email"}
            value={usuario.email}
            onChange={handleInputChange}
          />
          <Input
            type={"password"}
            label={"Senha"}
            name={"password"}
            value={usuario.password}
            onChange={handleInputChange}
          />
          <ButtonAccess
            label={"Entrar"}
            className={"button-success buttons-navigator buttons-actions"}
            onClick={handleLogin}
          />
          <Button
            label={"Voltar"}
            className={"buttons-navigator buttons-actions"}
            path={"/index"}
          />
          <p
            className={`login-mensagem ${
              mensagem !== "" ? "" : "login-mensagem-disable"
            }`}
          >
            {mensagem}
          </p>
        </form>
      </section>
    </div>
  );

  return sections;
}
