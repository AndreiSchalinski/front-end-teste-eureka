import "../styles/indexPages/indexPage.css";
import Button from "../components/Button";

export default function Header({
  showButtonLogin,
  pathNavigatinoButton,
  showButtonLogout,
  showButtonUsuarios,
}) {
  return (
    <header>
      <h1>
        <span className="cooper">COOPER</span>
        <span className="filme">FILME</span>
      </h1>
      <div>
        <Button
          label={"LOGIN"}
          className={"buttons-actions button"}
          showButton={showButtonLogin}
          path={pathNavigatinoButton}
        />
        <Button
          label={"USUÁRIOS"}
          className={"buttons-actions button"}
          showButton={showButtonUsuarios}
          path={"/admin/usuario/lista"}
        />
        <Button
          label={"LOGOUT"}
          path={"/index"}
          showButton={showButtonLogout}
          className={"buttons-actions button"}
        />
      </div>
    </header>
  );
}
