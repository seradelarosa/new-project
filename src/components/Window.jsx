// Reusable "window" component mimicking draggable windows
import "./Window.css";

export default function Window({ title, children }) {
  return (
    <div className="window">
      <div className="window-header">
        <span>{title}</span>
        <button className="close-btn">✖</button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}
