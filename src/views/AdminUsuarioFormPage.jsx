import "../styles/indexPages/consultaPage.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { postUsuario } from "../services/usuario.service";
import { useState } from "react";

export default function AdminUsuarioFormPage() {
  let list = ["Analista", "Revisor", "Aprovador"].map((el) => (
    <option value={el}>{el}</option>
  ));

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    cargo: "",
    telefone: "",
    username: "",
    password: "",
    role: 1,
    roles: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSaveUsuario = (e) => {
    e.preventDefault();

    try {
      postUsuario(usuario);
    } catch (error) {
      alert("Erro ao tentar salvar usuário");
    }
  };

  const sections = (
    <div>
      <section>
        <Header
          pathNavigatinoButton={"/admin/login"}
          showButtonLogin={false}
          showButtonUsuarios={false}
        />
      </section>
      <section>
        <div className="container-tables">
          <h1>Cadastrar novo usuário</h1>
          <form onSubmit={handleSaveUsuario}>
            <div className="col-inputs">
              <Input
                type={"text"}
                label={"Nome completo"}
                name={"nome"}
                value={usuario.nome}
                onChange={handleInputChange}
              />
              <Input
                type={"text"}
                label={"E-mail"}
                name={"email"}
                value={usuario.email}
                onChange={handleInputChange}
              />
              <Input
                type={"select"}
                label={"Cargo"}
                name={"cargo"}
                value={usuario.cargo}
                listOptions={list}
                onChange={handleInputChange}
              />
              <Input
                type={"text"}
                label={"Telefone"}
                name={"telefone"}
                value={usuario.telefone}
                onChange={handleInputChange}
              />
              <Input
                type={"text"}
                label={"Usuário"}
                name={"username"}
                value={usuario.username}
                onChange={handleInputChange}
              />
              <Input
                type={"password"}
                label={"Senha"}
                name={"password"}
                value={usuario.password}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </section>
      <section>
        <section className="container-buttons">
          <Button
            label={"VOLTAR"}
            className={"buttons-navigator buttons-actions"}
            path={"/admin/usuario/lista"}
          />
          <Button
            label={"SALVAR"}
            className={"button-success buttons-actions"}
            action={"save"}
            onClick={handleSaveUsuario}
          />
        </section>
      </section>
    </div>
  );

  return sections;
}
