import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="nav-item">home</span>
        <span className="nav-item">gallery</span>
        <span className="nav-item">about</span>
        <span className="nav-item">shop</span>
      </div>

      {/* <div className="nav-right">
        <span className="nav-clock">00:00</span>
      </div> */}
    </div>
  );
}
