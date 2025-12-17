export default function Contact() {
  return (
    <div className="container my-5">

      {/* TITRE */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contactez-nous</h1>
        <p className="text-muted fs-5">
          Une question ? Une suggestion ? Nous sommes là pour vous répondre.
        </p>
      </div>

      <div className="row g-5">

        {/* FORMULAIRE */}
        <div className="col-lg-6">
          <div className="card shadow-sm p-4 border-0">
            <h3 className="fw-semibold mb-4">Envoyez-nous un message</h3>

            <form>

              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input type="text" className="form-control" placeholder="Votre nom" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="email@example.com" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Votre message..."></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Envoyer
              </button>

            </form>
          </div>
        </div>

        {/* INFORMATIONS + ÉQUIPE */}
        <div className="col-lg-6">

          {/* INFOS */}
          <div className="mb-4">
            <h3 className="fw-semibold mb-3">Informations</h3>
            <p className="mb-1"><strong>Adresse :</strong> 123 Rue du Sushi, Meaux</p>
            <p className="mb-1"><strong>Téléphone :</strong> 06 12 34 56 78</p>
            <p className="mb-1"><strong>Email :</strong> contact@sushifast.fr</p>
          </div>

          {/* ÉQUIPE */}
          <div className="card border-0 shadow-sm p-4">
            <h3 className="fw-semibold mb-3">Notre équipe</h3>

            <ul className="list-group list-group-flush">

              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Antunes</span>
                <span className="text-muted">Développeur</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Baer</span>
                <span className="text-muted">Développeur</span>
              </li>

            </ul>
          </div>

        </div>

      </div>

      {/* GOOGLE MAPS (optionnel) */}
      <div className="mt-5">
        <h3 className="fw-semibold mb-3">Nous trouver</h3>
        <div className="rounded overflow-hidden shadow-sm">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Meaux&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
