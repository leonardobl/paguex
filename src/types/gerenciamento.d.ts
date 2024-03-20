export interface IGerenciamentoGeral {
  quantidade: number;
  quantidadeLoja: number;
  quantidadeMovel: number;
  quantidadeMovelNaoObrigatorio: number;
  quantidadeMovelObrigatorio: number;
  quantidadeRevistoria: number;
  total: number;
  totalLoja: number;
  totalMovel: number;
  totalMovelNaoObrigatorio: number;
  totalMovelObrigatorio: number;
  totalRevistoria: number;
}

export interface IGerenciamentoLojas {
  cidade: string;
  nome: string;
  quantidade: number;
  quantidadeLoja: number;
  quantidadeMovel: number;
  quantidadeMovelNaoObrigatorio: number;
  quantidadeMovelObrigatorio: number;
  quantidadeRevistoria: number;
  total: number;
  totalLoja: number;
  totalMovel: number;
  totalMovelNaoObrigatorio: number;
  totalMovelObrigatorio: number;
  totalRevistoria: number;
  uf: string;
}

export interface IGerenciamentoProducao {
  data: string;
  vistorias: number;
}
