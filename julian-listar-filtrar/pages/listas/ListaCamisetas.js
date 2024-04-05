import { useState, useEffect } from 'react';
import Camiseta from '../componentes/Camiseta';



const ListaCamisetas = ({ filtros }) => {
  const [camisetas, setCamisetas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/camisetas?nome=${filtros.nome}&preco=${filtros.preco}&tamanho=${filtros.tamanho}&cor=${filtros.cor}`);
        const data = await response.json();
        setCamisetas(data);
      } catch (error) {
        console.error('Erro ao buscar camisetas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filtros]);

  return (
    <div className="container mx-auto py-8">
      {isLoading ? (
        <p className="text-center text-gray-600">Carregando camisetas...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {camisetas.map((camiseta) => (
              <div key={camiseta.id} className="bg-white rounded-lg overflow-hidden shadow-md">

                <Camiseta 
                id={camiseta.id} 
                imagem={camiseta.imagem} 
                nome={camiseta.nome} 
                preco={camiseta.preco} 
                tamanhos={camiseta.tamanhos} 
                cores={camiseta.cores} />
                
              </div>
            ))}
          </div>
          {camisetas.length === 0 && !isLoading && <p className="text-center mt-4 text-orange-800">Nenhuma camiseta encontrada.</p>}
        </>
      )}
    </div>
  );
};

export default ListaCamisetas;
