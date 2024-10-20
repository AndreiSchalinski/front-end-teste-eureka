import "../styles/indexPages/indexPage.css";

export default function Input({
  name,
  value,
  type,
  label,
  listOptions,
  onChange,
}) {
  if (type === "text") {
    return (
      <input
        className="input"
        type="text"
        name={name}
        value={value}
        placeholder={label}
        onChange={(e) => onChange(e)}
      />
    );
  }
  if (type === "password") {
    return (
      <input
        className="input"
        type="password"
        name={name}
        value={value}
        placeholder={label}
        onChange={(e) => onChange(e)}
      />
    );
  }
  if (type === "textarea") {
    return (
      <textarea
        className="input"
        name={name}
        value={value}
        placeholder={label}
        rows={7}
        onChange={(e) => onChange(e)}
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
