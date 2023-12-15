import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '8px', backgroundColor: '#FFFFFF' }}>
      <header style={{ position: 'fixed', top: '20px', left: '80px', color: '#000000' }}>
        <h1 style={{ fontSize: '2.0rem', fontWeight: 'bold' }}>Darwin Alves</h1>
      </header>

      <header style={{ position: 'fixed', top: '25px', right: '80px', display: 'flex', alignItems: 'center', gap: '45px' }}>
        <nav style={{ display: 'flex', gap: '45px' }}>
          <a href="#pages" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000000' }}>Home</a>
          <a href="#about" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000000' }}>About</a>
          <a href="#proyects" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000000' }}>Projects</a>
        </nav>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Image
            src="/icons/luna.png"
            alt="Tema Nocturno"
            width={40}
            height={40}
          />
          <Image
            src="/icons/moreoptions.png"
            alt="Idioma Ingles"
            width={40}
            height={40}
          />
        </div>
      </header>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 48px)', textAlign: 'center' }}>
        <p style={{  fontSize: '1.8rem', fontWeight: 'bold', color: '#000000'  }}>
          Hello, I am Darwin Alves, a student of UTEC, University <br /> Technician in Information Technology.
          I am from Uruguay and <br />I really like the development of applications.
        </p>
      </main>
    </div>
  );
}
