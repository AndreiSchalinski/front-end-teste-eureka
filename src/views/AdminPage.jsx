import Header from "../components/Header";
import TextPages from "../components/TextPages";
import Button from "../components/Button";

export default function AdminPage() {
  const sectinos = (
    <div>
      <section>
        <Header pathNavigatinoButton={"/admin/login"} showButtonLogin={false} />
        <TextPages />
      </section>
      <section className="container-buttons">
        <Button
          label={"CONSULTAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/consultar"}
        />
        <Button
          label={"AVALIAR"}
          className={"buttons-navigator buttons-actions"}
          path={"/admin/avaliar"}
        />
      </section>
    </div>
  );

  return sectinos;
}
