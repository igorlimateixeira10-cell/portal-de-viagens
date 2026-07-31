import { destinos } from "../../../lib/destinos";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return destinos.map((destino) => ({
    id: destino.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const destino = destinos.find((d) => d.id === resolvedParams.id);

  if (!destino) {
    return {
      title: "Destino não encontrado",
      description: "O destino procurado não existe em nosso portal.",
    };
  }

  return {
    title: `${destino.nome} | Portal de Viagens`,
    description: destino.descricao,
  };
}

export default async function DestinoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const destino = destinos.find((d) => d.id === resolvedParams.id);

  if (!destino) {
    notFound();
  }

  return (
    <main style={{ padding: "60px 20px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid #eaeaea", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
        <img 
          src={destino.imagem} 
          alt={destino.nome} 
          style={{ width: "100%", height: "350px", objectFit: "cover" }} 
        />
        <div style={{ padding: "40px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#111" }}>{destino.nome}</h1>
          <p style={{ fontSize: "1.2rem", color: "#444", lineHeight: "1.6", marginBottom: "30px" }}>
            {destino.descricao}
          </p>
          <Link 
            href="/destinos" 
            style={{ 
              display: "inline-block",
              color: "#0070f3", 
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            ← Voltar para a lista de destinos
          </Link>
        </div>
      </div>
    </main>
  );
}