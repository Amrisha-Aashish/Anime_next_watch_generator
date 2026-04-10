import { useState } from "react";

function AnimeCard({ anime }) {
  const [show, setShow] = useState(false);

  return (
    <div className="neon-card" style={styles.card}>
      <img src={anime.image} alt={anime.title} style={styles.image} />

      <h3>{anime.title}</h3>
      <p>⭐ {anime.rating || "N/A"}</p>

      {show && <p style={styles.synopsis}>{anime.synopsis}</p>}

      <button style={styles.button} onClick={() => setShow(!show)}>
        {show ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    textAlign: "center",
    borderRadius: "15px",
    transition: "0.3s",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  synopsis: {
    fontSize: "13px",
    marginTop: "10px",
    color: "#aaa",
    lineHeight: "1.5",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    background: "linear-gradient(45deg, #00f7ff, #ff00ff)",
    color: "#000",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default AnimeCard;