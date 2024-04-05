import Image from "next/image";


function convertColor(cor) {
  cor = cor.toLowerCase();
  switch (cor) {
    case 'branco':
      return 'bg-white';
    case 'azul':
      return 'bg-blue-500';
    case 'amarelo':
      return 'bg-yellow-500';
    case 'verde':
      return 'bg-green-500';
    case 'laranja':
      return 'bg-orange-500';
    case 'preto':
      return 'bg-black';
    case 'vermelho':
      return 'bg-red-500';
    default:
      return 'yellow'; // cor padrão se a cor não corresponder
  }
}

function Camiseta({ id, imagem, nome, preco, tamanhos= [], cores }) {
  return (
    <div className="p-4 bg-white rounded shadow-lg w-full flex flex-col items-center justify-center">

      <Image
        src={imagem}
        alt=""
        className="dark:invert max-h-24"
        width={100}
        height={24}
      />

      <h2 className="text-xl font-bold mt-4">{nome}</h2>
      <p className="text-gray-500">Preço R$ : {preco}</p>
      <p className="text-gray-500">{tamanhos.join(', ')}</p>
      <div className="flex mt-2">
        {cores?.map((cor) => (
          <div
            key={cor}
            className={`w-4 h-4 rounded-full mr-2 ${convertColor(cor)}`}
          >
          </div>

        ))}
      </div>
      <a href={`/detalhes/DetalhesCamisetas?id=${id}&nome=${nome}`} target="_blank" rel="noopener noreferrer">
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Detalhes
  </button>
</a>


    </div>
  );
}



export default Camiseta;