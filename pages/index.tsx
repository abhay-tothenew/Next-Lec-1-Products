
export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to my Products</h1>
        <p>Click on <b>Products</b> in the navigation to explore all products.</p>

    </div>
  );
}
import { CSSProperties } from "react";

const styles: { container: CSSProperties; button: CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
