export interface IColchaoAgendamentoDTO {
    empresa: string;
    relatorio: IColchaoAgendamentoLojaDTO;
}

export interface IColchaoAgendamentoLojaDTO {
    quantidadeTransferencia: number;
    quantidadePrimeiroEmplacamento: number;
}