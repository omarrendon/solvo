import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-2xl font-normal mt-20">Película no encontrada</h1>
      <div className="mt-10">
        <p>Lo sentimos, no pudimos encontrar la película que estás buscando.</p>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-lg underline cursor-pointer">
          Volver a la lista de películas
        </Link>
      </div>
    </main>
  );
}
