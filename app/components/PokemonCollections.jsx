'use client'
import React, { useEffect, useState } from 'react';
import pokeApi from '../helpers/PokeApi'
import PokemonItem from './PokemonItem';

const getPokemons = async (page) => {
  const { data } = await pokeApi.get(`pokemon?limit=16&offset=${(page - 1) * 10}`);
  return data.results;
};

export default function PokemonCollections() {

  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async (page) => {
    setLoading(true); 
    const data = await getPokemons(page);
    setPokemons(data);
    setLoading(false); 
  };

  useEffect(() => {
    fetchPokemons(page);
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {[...Array(16)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 w-100 animate-pulse">
            <div className="bg-slate-300 h-20 w-100 mb-2"></div>
            <div className="h-5 bg-slate-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="w-100">
        <div className="flex justify-between mb-4">
          <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500' onClick={prevPage} disabled={page === 1}>Prev</button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={nextPage}>Next</button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pokemon, index) => (
        <PokemonItem key={index} pokemonDetails={pokemon}/>
      ))}
      </div>
      <div className="w-100">
        <div className="flex justify-between mt-4">
          <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500' onClick={prevPage} disabled={page === 1}>Prev</button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={nextPage}>Next</button>
        </div>
      </div>
    </>
  )
}
