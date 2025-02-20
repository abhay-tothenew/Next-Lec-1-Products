import Link from "next/link";

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <h2>My Products List</h2>
      <div>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/products" style={styles.link}>Products</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "white",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Header;
