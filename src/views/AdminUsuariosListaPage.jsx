import Header from "../components/Header";
import Button from "../components/Button";
import { useEffect } from "react";
import { getListUsuarios } from "../services/usuario.service";

export default function AdminUsuariosListaPage() {
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const list = await getListUsuarios();
        console.log(list);
      } catch (error) {
        console.error("Erro ao carregar a lista de usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

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
          <div className="container-list-usuarios">
            <h1>Usuários cadastrados</h1>
            <Button
              label={"CADASTRAR"}
              className={"buttons-actions button"}
              path={"/admin/usuario/novo"}
            />
          </div>
          <table border="3">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João</td>
                <td>16/10/2024</td>
                <td>
                  <button>LER ROTEIRO</button>
                  <button>STATUS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="container-buttons">
        <Button
          label={"VOLTAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/panel"}
        />
      </section>
    </div>
  );

  return sections;
}
