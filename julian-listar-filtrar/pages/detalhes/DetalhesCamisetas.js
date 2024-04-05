
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function DetalhesCamisetas() {

  const router = useRouter();
  const id = router.query.id; // Acessa o parâmetro "id" da URL
  const nome = router.query.nome; // Acessa o parâmetro "nome" da URL

  const [DetalhesCamisetas, setDetalhesCamisetas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/detalhes?id=${id}`);
        const data = await response.json();
        setDetalhesCamisetas(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 bg-blue-500 rounded shadow-lg w-full max-w-xl mx-auto">
      
        <h3 className="text-3xl font-bold text-white mb-4 text-center">Nome: 
        <div className='text-black'>{nome}</div>
        </h3>

        <div className="container mx-auto py-8">
          {isLoading ? (
            <p className="text-center text-gray-600">Carregando detalhes...</p>
          ) : (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 items-center">
                {DetalhesCamisetas?.map((DetalhesCamisetas) => (
                  <div key={DetalhesCamisetas.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col md:flex-row bg-white shadow-md rounded p-4 md:p-8 my-4 justify-center items-center">
                      <div className="flex-1 text-center">
                        <h2 className="font-bold text-xl mb-2">Fabricante:</h2>
                        <p className="text-gray-700 text-base">{DetalhesCamisetas.detalhes.fabricante}</p>
                        <h2 className="font-bold text-xl mb-2">Tecido:</h2>
                        <p className="text-gray-700 text-base">{DetalhesCamisetas.detalhes.tecido}</p>
                      </div>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


