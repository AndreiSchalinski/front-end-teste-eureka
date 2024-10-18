import "../styles/indexPages/indexPage.css";

export default function Input({ type, label, listOptions, onChange }) {
  if (type === "text") {
    return (
      <input
        className="input"
        type="text"
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  if (type === "password") {
    return (
      <input
        className="input"
        type="password"
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  if (type === "textarea") {
    return (
      <textarea
        className="input"
        placeholder={label}
        rows={7}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    );
  }

  if (type === "select") {
    return (
      <select className="input">
        <option value="" disabled selected>
          {label}
        </option>
        {listOptions}
      </select>
    );
  }
}
