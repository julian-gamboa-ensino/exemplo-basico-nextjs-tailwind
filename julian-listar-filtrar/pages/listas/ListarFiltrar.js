import 'tailwindcss/tailwind.css';

import React, { useState } from 'react';
import ListaCamisetas from './ListaCamisetas'; 

export default function Listar() {
  const [filtros, setFiltros] = useState({
    nome: '',
    preco: '',
    tamanho: '',
    cor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 bg-blue-500 rounded shadow-lg w-full h-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Filtros:</h1>
        <input 
          type="text" 
          placeholder="Nome" 
          name="nome" 
          value={filtros.nome} 
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <input 
          type="text" 
          placeholder="Preço" 
          name="preco" 
          value={filtros.preco} 
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <input 
          type="text" 
          placeholder="Tamanho" 
          name="tamanho" 
          value={filtros.tamanho} 
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        />
        <select 
          name="cor" 
          value={filtros.cor} 
          onChange={handleChange}
          className="px-3 py-2 border rounded mb-2"
        >
          <option value="">Nehuma Cor</option>
          <option value="Azul">Azul</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Laranja">Laranja</option>
          <option value="Preto">Preto</option>
          <option value="Verde">Verde</option>
          <option value="Vermelho">Vermelho</option>
        </select>
        <ListaCamisetas filtros={filtros} />
      </div>
    </div>
  );
}
