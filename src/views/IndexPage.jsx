import Header from "../components/Header";
import TextPages from "../components/TextPages";
import Button from "../components/Button";

export default function IndexPage() {
  const sectinos = (
    <div>
      <section>
        <Header
          pathNavigatinoButton={"/admin/login"}
          showButtonUsuarios={false}
          showButtonLogout={false}
        />
        <TextPages />
      </section>
      <section className="container-buttons">
        <Button
          label={"CONSULTAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/index/consultar"}
        />
        <Button
          label={"COMPARTILHAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/index/compartilhar"}
        />
      </section>
    </div>
  );

  return sectinos;
}
