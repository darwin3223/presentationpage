import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="fixed top-4 right-4 z-10 flex items-center">
        {/* Agregar iconos */}
        <div className="flex space-x-4">
          <Image
            src="/app/uruguay.png" // Reemplaza con la ruta correcta de tu imagen iconIdiomaEs
            alt="Icono Idioma Español"
            width={24}
            height={24}
          />
          <Image
            src="/iconIdiomaEn.png" // Reemplaza con la ruta correcta de tu imagen iconIdiomaEn
            alt="Icono Idioma Inglés"
            width={24}
            height={24}
          />
          <Image
            src="/iconNightTheme.png" // Reemplaza con la ruta correcta de tu imagen iconNightTheme
            alt="Icono Tema Nocturno"
            width={24}
            height={24}
          />
        </div>
        {/* Agregar apartados */}
        <nav className="flex space-x-4">
          <a href="#about" className="text-lg font-semibold">About</a>
          <a href="#proyectos" className="text-lg font-semibold">Proyectos</a>
        </nav>
      </header>
      <main className="text-center mt-15">
      <p className="text-2xl font-bold">
          pruebita
        </p>
      </main>
    </div>
  );
}