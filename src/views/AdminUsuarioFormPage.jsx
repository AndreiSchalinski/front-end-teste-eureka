import "../styles/indexPages/consultaPage.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AdminUsuarioFormPage() {
  let list = ["Analista", "Revisor", "Aprovador"].map((el) => (
    <option value={el}>{el}</option>
  ));

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
          <form action="">
            <div className="col-inputs">
              <Input type={"text"} label={"Nome completo"} />
              <Input type={"text"} label={"E-mail"} />
              <Input type={"select"} label={"Cargo"} listOptions={list} />
              <Input type={"text"} label={"Telefone"} />
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
            className={"button-success buttons-navigator buttons-actions"}
          />
        </section>
      </section>
    </div>
  );

  return sections;
}
