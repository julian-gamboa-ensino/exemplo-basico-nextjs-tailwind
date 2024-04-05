import camisetas from './dadosCamisetas'; 

export default function handler(req, res) {


  const { id, nome, preco, tamanho, cor } = req.query;
  let camisetasFiltradas = [...camisetas];

  if (id) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.id === parseInt(id));
  }

  if (nome) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.nome.toLowerCase().includes(nome.toLowerCase()));
  }
  if (preco) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.preco <= parseFloat(preco));
  }
  if (tamanho) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.tamanhos.includes(tamanho.toUpperCase()));
  }
  if (cor) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.cores.includes(cor));
  }

  res.status(200).json(camisetasFiltradas);
}



