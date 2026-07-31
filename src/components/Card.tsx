import Link from "next/link";

interface CardProps {
  titulo: string;
  descricao: string;
  imagem: string;
  id: string;
}

export default function Card({ titulo, descricao, imagem, id }: CardProps) {
  return (
    <Link 
      href={`/destinos/${id}`}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s ease"
      }}
    >
      {/* Imagem do topo */}
      <div style={{ height: "260px", width: "100%", overflow: "hidden" }}>
        <img
          src={imagem}
          alt={titulo}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Conteúdo textual */}
      <div style={{ padding: "20px 24px 24px 24px" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "8px", color: "#111827" }}>
          {titulo}
        </h3>
        <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: "1.5" }}>
          {descricao}
        </p>
      </div>
    </Link>
  );
}