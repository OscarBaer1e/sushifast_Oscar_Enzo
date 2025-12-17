import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-white" to="/">SushiFast</Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ filter: "invert(100%)",
            backgroundColor: "#FF6B6B" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-3" 
                to="/menus"
                style={{ transition: "color 0.2s" }}
              >
                Menus
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link text-white fw-semibold px-3" 
                to="/contact"
                style={{ transition: "color 0.2s" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link:hover {
          color: #FFE66D !important; /* jaune doux au hover */
        }
        .navbar-brand:hover {
          color: #FFE66D !important;
        }
      `}</style>
    </nav>
  );
}
