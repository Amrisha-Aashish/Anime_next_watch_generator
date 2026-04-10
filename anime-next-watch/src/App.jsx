import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AnimeCard from "./components/AnimeCard";
import Filters from "./components/Filters";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.jikan.moe/v4/top/anime");
      const data = await res.json();

      setAnimeList(formatData(data.data));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const searchAnime = async (query) => {
    if (!query) return fetchTrending();

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}`
      );
      const data = await res.json();

      setAnimeList(formatData(data.data));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchTopRated = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
      );
      const data = await res.json();

      setAnimeList(formatData(data.data));
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const fetchByGenre = async (genreId) => {
  if (!genreId) return fetchTrending();

  setLoading(true);
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${genreId}`
    );
    const data = await res.json();

    setAnimeList(formatData(data.data));
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};

  const formatData = (data) => {
    return data.map((item) => ({
      title: item.title,
      rating: item.score,
      image: item.images.jpg.image_url,
      synopsis: item.synopsis,
    }));
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Discover Anime 🎬</h2>

        <Filters
            onSearch={searchAnime}
            onTopRated={fetchTopRated}
            onGenre={fetchByGenre}
        />

        <button onClick={fetchTrending} style={styles.reset}>
             Reset 🔄
        </button>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div style={styles.grid}>
            {animeList.map((anime, index) => (
              <AnimeCard key={index} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#1a1a2e",
    color: "#fff",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#1a1a2e",
    color: "#fff",
  },
  button: {
    padding: "10px 15px",
    background: "linear-gradient(45deg, #ff00ff, #00f7ff)",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
  },
  reset: {
    marginTop: "15px",
    padding: "8px 12px",
    border: "none",
    background: "#00f7ff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};


export default App;