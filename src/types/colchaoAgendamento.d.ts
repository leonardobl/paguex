export interface IColchaoAgendamentoDTO {
    empresa: string;
    quantidadeTransferenciaTotal: number;
    quantidadePrimeiroEmplacamentoTotal: number;
    relatorio: IColchaoAgendamentoLojaDTO[];
}

export interface IColchaoAgendamentoLojaDTO {
    nome: string;
    quantidadeTransferencia: number;
    quantidadePrimeiroEmplacamento: number;
    ultimaEsperaLoja: number;
    ultimaEsperaDelivery: number;
}