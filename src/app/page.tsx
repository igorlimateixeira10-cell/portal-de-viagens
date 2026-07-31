import Link from "next/link";

export default function Home() {
  return (
    <main style={{ 
      minHeight: "80vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      fontFamily: "sans-serif", 
      textAlign: "center",
      padding: "0 20px"
    }}>
      <h1 style={{ 
        fontSize: "3rem", 
        fontWeight: "800", 
        color: "#1e293b", 
        marginBottom: "16px",
        letterSpacing: "-0.025em"
      }}>
        Descubra o mundo com a gente
      </h1>
      
      <p style={{ 
        fontSize: "1.2rem", 
        color: "#64748b", 
        maxWidth: "600px", 
        marginBottom: "32px",
        lineHeight: "1.5"
      }}>
        Explore os destinos mais fascinantes do planeta, planeje suas próximas aventuras e viva experiências inesquecíveis.
      </p>

      <Link 
        href="/destinos" 
        style={{ 
          display: "inline-block", 
          padding: "14px 32px", 
          backgroundColor: "#2563eb", 
          color: "#fff", 
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: "9999px", 
          textDecoration: "none",
          boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3)",
          transition: "background-color 0.2s"
        }}
      >
        Explorar Destinos ✈️
      </Link>
    </main>
  );
}