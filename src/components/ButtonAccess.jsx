import "../styles/indexPages/indexPage.css";

export default function ButtonAccess({
  label,
  className,
  onClick,
  showButton,
}) {
  return (
    <button
      className={`${className} ${showButton !== false ? "" : "none-button"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
