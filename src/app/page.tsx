import Image from "next/image";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import bmth from "@/assets/bmth-album.jpg";
import cbjr from "@/assets/cbjr-album.jpeg";
import fortoday from "@/assets/fortoday-album.jpg";
import paramore from "@/assets/paramore-album.jpg";
import pense from "@/assets/pense-album.jpg";
import tdwp from "@/assets/tdwp-album.jpeg";
import { Sidebar } from "@/Components/Sidebar";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-6 mt-4">
            <a
              href=""
              className="bg-white/5 group flex overflow-hidde items-center gap-4 rounded-md hover:bg-white/10 transition-colors"
            >
              <Image src={bmth} width={104} height={104} alt="Capa do album" />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src={cbjr} width={104} height={104} alt="Capa do album" />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src={fortoday}
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src={paramore}
                width={104}
                height={104}
                alt="Capa do album"
              />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src={pense} width={104} height={104} alt="Capa do album" />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group flex items-center gap-4 rounded-md overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src={tdwp} width={104} height={104} alt="Capa do album" />
              <strong>Nome do Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Matheus Willock
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src={cbjr}
                className="w-full"
                width={120}
                height={120}
                alt="Nome do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src={cbjr}
                className="w-full"
                width={120}
                height={120}
                alt="Nome do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src={cbjr}
                className="w-full"
                width={120}
                height={120}
                alt="Nome do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src={cbjr}
                className="w-full"
                width={120}
                height={120}
                alt="Nome do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src={cbjr}
                className="w-full"
                width={120}
                height={120}
                alt="Nome do album"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
