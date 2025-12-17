import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const text = "SushiFast";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-background d-flex justify-content-center align-items-center">
      <div className="home-overlay text-center px-4 animate-home">
        <h1 className="display-3 fw-bold gold-text">
          {displayedText}
          <span className="cursor">|</span>
        </h1>

        <p className="fs-4 text-light mt-3 fade-in-delay">
          L’excellence du sushi, livrée avec élégance
        </p>

        <a href="/menus" className="btn btn-gold btn-lg mt-4 fade-in-delay">
          Découvrir les menus
        </a>
      </div>
    </div>
  );
}

export default Home;
