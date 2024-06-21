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

export interface IGerenciamentoProps {
  dataInicio: string;
  dataFim: string;
  empresa?: string;
}

//  -- - --

export interface IGerenciamentoDTO {
  empresas: IGerenciamentoEmpresaDTO[];
  lojas: IGerenciamentoLojaDTO[];
  movelNaoObrigatorio: number;
  movelObrigatorio: number;
  producaoDiaria: IGerencimanetoDiarioDTO[];
  qtdPrimeiroEmplacamento: number;
  qtdTransferencia: number;
  revistorias: number;
  ticketMedio: number;
  totalLoja: number;
  totalMovel: number;
  totalVistorias: number;
}

export interface IGerenciamentoEmpresaDTO {
  empresa: string;
  qtdDelivery: number;
  qtdLoja: number;
}

export interface IGerenciamentoLojaDTO {
  empresa: string;
  loja: string;
  movelNaoObrigatorio: number;
  movelObrigatorio: number;
  perLoja: number;
  perMovel: number;
  qtdLoja: number;
  qtdMovel: number;
  qtdPrimeiroEmplacamento: number;
  qtdTransferencia: number;
  revistorias: number;
  total: number;
}

export interface IGerencimanetoDiarioDTO {
  empresa: string;
  producao: IGerenciamentoDiarioRevistoriaDTO[];
}

export interface IGerenciamentoDiarioRevistoriaDTO {
  data: string;
  vistorias: number;
}

export interface IProductivitySurveyorProps {
  loja?: string;
  empresa?: string;
}
