import Header from "../components/Header";
import Button from "../components/Button";

export default function AdminConsultaPage() {
  const sections = (
    <div>
      <section>
        <Header pathNavigatinoButton={"/admin/login"} showButtonLogin={false} />
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
      <section className="container-buttons">
        <Button
          label={"VOLTAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/panel"}
        />
        <Button
          label={"AVALIAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/avaliar"}
        />
      </section>
    </div>
  );

  return sections;
}
