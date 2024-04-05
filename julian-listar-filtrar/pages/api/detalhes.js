import detalhes from './dadosDetalhesCamisetas'; 

export default function handler(req, res) {


  const { id } = req.query;
  let camisetasFiltradas = [...detalhes];

  if (id) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.id === parseInt(id));
    // Verifica se há camisetas filtradas antes de enviar a resposta
    if (camisetasFiltradas?.length > 0) {
      res.status(200).json(camisetasFiltradas);
    } else {
      res.status(404).json([]);
    }
  } else {
    res.status(400).json({ error: 'Missing required query parameters. (Falta o parâmetro "id")' });
  }
}


