import "../styles/indexPages/indexPage.css";
import { useNavigate } from "react-router-dom";

export default function ButtonLogin({ label, className, onClick }) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
