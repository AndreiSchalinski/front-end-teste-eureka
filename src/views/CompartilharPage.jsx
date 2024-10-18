import "../styles/indexPages/consultaPage.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

export default function CompartilharPage() {
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
          <h1>Para paraticipar, cadastre o seu roteiro aqui</h1>
          <form action="">
            <div className="col-inputs">
              <Input type={"text"} label={"Nome completo"} />
              <Input type={"text"} label={"E-mail"} />
              <Input type={"text"} label={"Telefone"} />
            </div>
            <div>
              <Input type={"textarea"} label={"Roteiro do filme"} />
            </div>
          </form>
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
            label={"SALVAR"}
            className={"button-success buttons-navigator buttons-actions"}
          />
        </section>
      </section>
    </div>
  );

  return sections;
}
