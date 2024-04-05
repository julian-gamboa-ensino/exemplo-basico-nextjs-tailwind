import detalhes from './dadosDetalhesCamisetas'; 

export default function handler(req, res) {


  const { id } = req.query;
  let camisetasFiltradas = [...detalhes];

  if (id) {
    camisetasFiltradas = camisetasFiltradas.filter(camiseta => camiseta.id === parseInt(id));
    res.status(200).json(camisetasFiltradas);
  }

  
  res.status(400).json({ error: 'Missing required query parameters.(Falta o parametro "id")' });
}



