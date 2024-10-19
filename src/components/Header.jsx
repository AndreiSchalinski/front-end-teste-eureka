import "../styles/indexPages/indexPage.css";
import Button from "../components/Button";
import ButtonAccess from "../components/ButtonAccess";
import { useNavigate } from "react-router-dom";

export default function Header({
  showButtonLogin,
  pathNavigatinoButton,
  showButtonLogout,
  showButtonUsuarios,
}) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/index");
  };
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
        <ButtonAccess
          label={"LOGOUT"}
          className={"buttons-actions button"}
          showButton={showButtonLogout}
          onClick={logout}
        />
      </div>
    </header>
  );
}
