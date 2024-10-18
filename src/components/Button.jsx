import "../styles/indexPages/indexPage.css";
import { useNavigate } from "react-router-dom";

export default function Button({ label, className, path, showButton }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <button
      className={`${className} ${showButton !== false ? "" : "none-button"}`}
      onClick={handleNavigate}
    >
      {label}
    </button>
  );
}
