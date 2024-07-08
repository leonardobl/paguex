export interface ITendenciaDTO {
    empresa: string;
    meta?: number;
    qtdTotal: number;
    valorTotal: number;
    qtdMedia: number;
    valorMedio: number; 
    qtdMediaProjecao: number;
    valorMedioProjecao: number;
    qtdMediaNecessaria: number;
    valorMedioNecessario: number;
    tendencias: ITendenciaDiaDTO[];
}

export interface ITendenciaDiaDTO {
    data: string;
    qtdTotal: number;
    valorTotal: number;
}

export interface ITendenciaDesempenhoDTO {
    empresa: string;
    meta?: number;
    qtdTotal: number;
    valorTotal: number;
    qtdMedia: number;
    valorMedio: number; 
    qtdMediaProjecao: number;
    valorMedioProjecao: number;
    qtdMediaNecessaria: number;
    valorMedioNecessario: number;
}