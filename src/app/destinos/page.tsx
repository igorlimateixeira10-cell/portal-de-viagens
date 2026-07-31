import Link from "next/link";
import { destinos } from "../../lib/destinos";

export default function DestinosPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", color: "#333" }}>Nossos Destinos</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
        {destinos.map((destino) => (
          <div 
            key={destino.id}
            style={{
              border: "1px solid #e1e1e1",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <img 
              src={destino.imagem} 
              alt={destino.nome} 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#111" }}>
                {destino.nome}
              </h2>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "20px", flex: 1 }}>
                {destino.descricao}
              </p>
              <Link 
                href={`/destinos/${destino.id}`}
                style={{ 
                  display: "inline-block",
                  backgroundColor: "#0070f3", 
                  color: "#fff", 
                  padding: "10px 16px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "500",
                  textAlign: "center"
                }}
              >
                Ver Detalhes →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}