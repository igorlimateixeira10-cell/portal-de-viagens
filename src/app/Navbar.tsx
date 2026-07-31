import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "1.4rem" }}>✈️</span>
        <span className="gradient-text" style={{ fontSize: "1.2rem", fontWeight: "bold", letterSpacing: "1px" }}>
          PORTAL VIAGENS
        </span>
      </Link>
      
      <nav style={{ display: "flex", gap: "32px" }}>
        <Link href="/" className="nav-link">
          Início
        </Link>
        <Link href="/destinos" className="nav-link">
          Destinos
        </Link>
      </nav>
    </header>
  );
}