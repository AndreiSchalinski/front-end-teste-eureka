import "../styles/indexPages/consultaPage.css";
import Header from "../components/Header";
import Button from "../components/Button";

export default function ConsultaPage() {
  const sections = (
    <div>
      <section>
        <Header
          pathNavigatinoButton={"/admin/login"}
          showButtonLogout={false}
          showButtonUsuarios={false}
        />
      </section>
      <section>
        <div className="container-tables">
          <h1>Consulte aqui a avaliação dos seus roteiro</h1>
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
      <section>
        <section className="container-buttons">
          <Button
            label={"VOLTAR"}
            className={"buttons-navigator buttons-actions"}
            path={"/index"}
          />
          <Button
            label={"COMPARTILHAR"}
            className={"buttons-navigator buttons-actions"}
            path={"/index/compartilhar"}
          />
        </section>
      </section>
    </div>
  );

  return sections;
}
