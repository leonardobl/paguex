export interface ITendenciaDTO {
    empresa: string;
    tendencias: ITendenciaDiaDTO[];
}

export interface ITendenciaDiaDTO {
    data: string;
    qtdTotal: number;
    valorTotal: number;
}