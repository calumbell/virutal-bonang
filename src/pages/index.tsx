import { LarasSelector, Pot } from "@/components";
import { Laras } from "@/types";
import { bonangData } from "../../public/data";
import { useState } from "react";

export default function Home() {
  const [laras, setLaras] = useState<Laras>("slendro");

  return (
    <div className="flex flex-col jus w-screen h-screen">
      <header className="flex justify-between h-12">
        <h1 className="text-3xl bg-red-800 px-4 py-1 text-white">Bonang</h1>
        <LarasSelector setter={setLaras} />
      </header>

      <main className="mb-auto mt-auto mx-5">
        <section className="flex flex-col align-middle">
          {bonangData[laras].map((row, i) => (
            <div className="flex gap-2 my-2 justify-center" key={i}>
              {row.map((pot) => (
                <Pot {...pot} key={pot.src} />
              ))}
            </div>
          ))}
        </section>
      </main>

      <footer className="text-center bg-red-800 text-white">
        <span>
          Made with love by <a href="https://github.com/calumbell">Calum</a>
        </span>
      </footer>
    </div>
  );
}
