import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { TipoServicoEnum } from "../enums/tipoServico";
import { TipoServicoReembolsoEnum } from "../enums/tipoServicoReembolso";

export interface IReembolsoDTO {
    empresa: string;
    loja: string;
    qtdTotal: number;
    valorTotal: number;
}