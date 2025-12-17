import { useState } from "react";
import data from "../data/boxes.json";
import MenuCard from "../components/MenuCard";

export default function Menus() {
  const [filter, setFilter] = useState({
    avocat: "all",
    coriandre: "all",
    prixMin: "",
    prixMax: "",
    piecesMin: "",
    piecesMax: "",
  });

  // Fonction de filtrage globale
  const filteredMenus = data.filter(menu => {

    // --- Avocat ---
    if (filter.avocat === "with" && !menu.saveurs.includes("avocat"))
      return false;
    if (filter.avocat === "without" && menu.saveurs.includes("avocat"))
      return false;

    // --- Coriandre ---
    if (filter.coriandre === "with" && !menu.saveurs.includes("coriandre"))
      return false;
    if (filter.coriandre === "without" && menu.saveurs.includes("coriandre"))
      return false;

    // --- Prix minimum ---
    if (filter.prixMin !== "" && menu.prix < parseFloat(filter.prixMin))
      return false;

    // --- Prix maximum ---
    if (filter.prixMax !== "" && menu.prix > parseFloat(filter.prixMax))
      return false;

    // --- Pièces minimum ---
    if (filter.piecesMin !== "" && menu.pieces < parseInt(filter.piecesMin))
      return false;

    // --- Pièces maximum ---
    if (filter.piecesMax !== "" && menu.pieces > parseInt(filter.piecesMax))
      return false;

    return true;
  });

  // Reset des filtres
  const resetFilters = () =>
    setFilter({
      avocat: "all",
      coriandre: "all",
      prixMin: "",
      prixMax: "",
      piecesMin: "",
      piecesMax: "",
    });

  return (
    <div className="container mt-4">
      <div className="row">

        {/* --------- SIDEBAR FILTRES --------- */}
        <aside className="col-md-3 mb-4">
          <div className="card p-3 shadow-sm">

            <h4 className="fw-bold mb-3">Filtres</h4>

            {/* AVOCAT */}
            <label className="fw-semibold mt-2">Avocat</label>
            <select
              className="form-select mb-2"
              value={filter.avocat}
              onChange={(e) => setFilter({ ...filter, avocat: e.target.value })}
            >
              <option value="all">Tous</option>
              <option value="with">Avec avocat</option>
              <option value="without">Sans avocat</option>
            </select>

            {/* CORIANDRE */}
            <label className="fw-semibold mt-2">Coriandre</label>
            <select
              className="form-select mb-2"
              value={filter.coriandre}
              onChange={(e) => setFilter({ ...filter, coriandre: e.target.value })}
            >
              <option value="all">Tous</option>
              <option value="with">Avec coriandre</option>
              <option value="without">Sans coriandre</option>
            </select>

            {/* PRIX */}
            <label className="fw-semibold mt-3">Prix (€)</label>
            <div className="d-flex gap-2">
              <input
                type="number"
                className="form-control"
                placeholder="Min"
                value={filter.prixMin}
                onChange={(e) => setFilter({ ...filter, prixMin: e.target.value })}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                value={filter.prixMax}
                onChange={(e) => setFilter({ ...filter, prixMax: e.target.value })}
              />
            </div>

            {/* PIECES */}
            <label className="fw-semibold mt-3">Nombre de pièces</label>
            <div className="d-flex gap-2">
              <input
                type="number"
                className="form-control"
                placeholder="Min"
                value={filter.piecesMin}
                onChange={(e) => setFilter({ ...filter, piecesMin: e.target.value })}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Max"
                value={filter.piecesMax}
                onChange={(e) => setFilter({ ...filter, piecesMax: e.target.value })}
              />
            </div>

            <button className="btn btn-dark w-100 mt-4" onClick={resetFilters}>
              Réinitialiser
            </button>
          </div>
        </aside>

        {/* --------- LISTE DES MENUS --------- */}
        <main className="col-md-9">
          <h2 className="fw-bold mb-4">Menus filtrés</h2>

          <div className="row g-4">
            {filteredMenus.length > 0 ? (
              filteredMenus.map((menu) => (
                <MenuCard key={menu.id} menu={menu} />
              ))
            ) : (
              <p className="text-muted">Aucun menu ne correspond aux filtres.</p>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}
