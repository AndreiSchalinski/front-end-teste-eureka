import "../styles/indexPages/indexPage.css";
import { useNavigate } from "react-router-dom";

export default function Button({
  label,
  className,
  path,
  showButton,
  action,
  onClick,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  if (action == "save") {
    return (
      <button
        className={`${className} ${showButton !== false ? "" : "none-button"}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className={`${className} ${showButton !== false ? "" : "none-button"}`}
        onClick={handleNavigate}
      >
        {label}
      </button>
    );
  }
}
