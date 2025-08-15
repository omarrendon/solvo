// Components
import Image from "next/image";
import LayoutCardMovie from "../components/LayoutCardMovie";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <Image
        className="dark:invert"
        src="/assets/logo.png"
        alt="Logo"
        width={180}
        height={38}
        priority
      />

      <h2 className="text-2xl font-bold mt-5 md:mt-20">Escoge una película</h2>
      <div className="mt-8 p-1">
        <LayoutCardMovie />
      </div>
    </main>
  );
}
