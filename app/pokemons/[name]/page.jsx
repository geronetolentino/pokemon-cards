'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import pokeApi from '../../helpers/PokeApi';

const getDetails = async (name) => {
  const { data } = await pokeApi.get(`pokemon/${name}`);
  return data;
};

const PokemonDetail = ({ params }) => {
  const name = params.name;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getDetails(name)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <main>
      <div className='text-center'>
        <h1 className="text-5xl font-semibold text-center mt-8 mb-2">Pokemon Details</h1>
        <Link href={`/pokemons`}>Back to list</Link>
        <div className='flex justify-center mt-5'>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-80">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} fill={false} loading="lazy" alt={pokemon.name} height={200} width={200} className="mx-auto mb-4 h-36" unoptimized />
            <h2 className="text-xl font-semibold text-center mb-2 capitalize">{pokemon.name}</h2>
            <p className="text-gray-700 text-sm mb-4 capitalize">{pokemon.type}</p>
            {pokemon.stats.map((stat, index) => (
            <div key={index} className="flex justify-between mb-2">
                <div className="text-gray-700 capitalize">{stat.stat.name}:</div>
                <div className="text-gray-900 font-semibold capitalize">{stat.base_stat}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetail;