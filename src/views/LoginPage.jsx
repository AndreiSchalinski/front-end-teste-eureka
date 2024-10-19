import "../styles/indexPages/consultaPage.css";
import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";
import ButtonAccess from "../components/ButtonAccess";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Armazena o token JWT no localStorage
        localStorage.setItem("token", data.token);
        // Redireciona para uma página protegida
        window.location.href = "/admin/panel";
      } else {
        setMensagem("Usuário ou senha incorretos");
      }
    } catch (error) {
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
          <Input type={"text"} label={"Usuário"} onChange={setEmail} />
          <Input type={"password"} label={"Senha"} onChange={setPassword} />
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
          <p className="login-mensagem">{mensagem}</p>
        </form>
      </section>
    </div>
  );

  return sections;
}
