function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Anime Next Watch 🚀</h1>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px",
    textAlign: "center",
    borderBottom: "1px solid rgba(0,255,255,0.2)",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(10px)",
  },
  logo: {
    color: "#00f7ff",
    textShadow: "0 0 10px #00f7ff",
  },
};

export default Navbar;