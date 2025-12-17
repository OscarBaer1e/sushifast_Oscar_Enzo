import { useParams } from "react-router-dom";
import data from "../data/boxes.json";

function MenuDetail() {
  const { id } = useParams();
  const menu = data.find(m => m.id === Number(id));

  if (!menu) {
    return (
      <div className="container mt-5 text-center">
        <p className="text-muted fs-5">Menu introuvable.</p>
      </div>
    );
  }

  return (
    <div className="container my-5">

      {/* TITRE */}
      <div className="mb-4">
        <h1 className="fw-bold">{menu.nom}</h1>
        <p className="fs-4 text-danger fw-semibold mb-1">
          {menu.prix} €
        </p>
        <p className="text-muted">
          {menu.pieces} pièces
        </p>
      </div>

      <div className="row g-4">

        {/* SAVEURS */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Saveurs</h3>
          <ul className="list-group">
            {menu.saveurs.map(saveur => (
              <li
                key={saveur}
                className="list-group-item"
              >
                {saveur}
              </li>
            ))}
          </ul>
        </div>

        {/* ALIMENTS */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Aliments</h3>
          <ul className="list-group">
            {menu.aliments.map(aliment => (
              <li
                key={aliment.nom}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{aliment.nom}</span>
                <span className="badge bg-primary">
                  {aliment.quantite}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default MenuDetail;
