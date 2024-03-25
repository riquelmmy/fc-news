"use client";
import Link from "next/link";

export default function ButtonsGerenciar() {
  return (
    <div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">
        <Link href={"/criar-noticia"}>Criar Notícia</Link>
      </button>
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg mr-2">
        <Link href={"/gerenciador"}>Publicadas</Link>
      </button>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
        <Link href={"/gerenciador/desativadas"}>Desativadas</Link>
      </button>
    </div>
  );
}
