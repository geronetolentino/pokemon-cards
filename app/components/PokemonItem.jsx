'use client'
import Image from "next/image";
import Link from "next/link";

export default function PokemonItem({ pokemonDetails }) {
  
  const id = pokemonDetails.url.split('/').slice(-2, -1)[0];
  
  return (
    <Link href={`/pokemons/${pokemonDetails.name}`}>
      <div className="bg-gray-100 rounded-lg shadow-md p-6 w-100">
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`} fill={false} loading="lazy" alt={pokemonDetails.name} height={200} width={70} className="mx-auto mb-4 h-16" unoptimized />
        <h2 className="text-xl font-semibold text-center mb-0 capitalize">{pokemonDetails.name}</h2>
      </div>
    </Link>
  )
}

