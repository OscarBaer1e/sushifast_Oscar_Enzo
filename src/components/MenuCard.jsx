import { Link } from "react-router-dom";

function MenuCard({ menu }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={menu.image} className="card-img-top" alt={menu.nom} />
        <div className="card-body">
          <h5>{menu.nom}</h5>
          <p>Pièces : {menu.pieces}</p>
          <p>Prix : {menu.prix} €</p>
          <Link to={`/menu/${menu.id}`} className="btn btn-primary">
            Détails
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
