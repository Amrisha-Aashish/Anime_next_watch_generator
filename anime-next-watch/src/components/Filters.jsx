function Filters({ onSearch, onTopRated, onGenre }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search anime..."
        onChange={(e) => onSearch(e.target.value)}
        style={styles.input}
      />

      <select onChange={(e) => onGenre(e.target.value)} style={styles.select}>
        <option value="">Select Genre</option>
        <option value="1">Action</option>
        <option value="2">Adventure</option>
        <option value="4">Comedy</option>
        <option value="8">Drama</option>
        <option value="10">Fantasy</option>
        <option value="22">Romance</option>
      </select>

      <button onClick={onTopRated} style={styles.button}>
        Top Rated ⭐
      </button>
    </div>
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
};

export default Filters;