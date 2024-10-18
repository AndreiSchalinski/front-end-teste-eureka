import Header from "../components/Header";
import Button from "../components/Button";

export default function AdminAvaliacaoPage() {
  const sections = (
    <div>
      <section>
        <Header pathNavigatinoButton={"/admin/login"} showButtonLogin={false} />
      </section>
      <section>
        <div className="container-tables">
          <h1>Avalie os roteiros enviados pelos clientes</h1>
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
        <Button
          label={"CONSULTAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/consultar"}
        />
      </section>
    </div>
  );

  return sections;
}
