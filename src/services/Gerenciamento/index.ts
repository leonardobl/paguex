import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IGerenciamentoDTO,
  IGerenciamentoLojas,
  IGerenciamentoProducao,
  IGerenciamentoProps,
} from "../../types/gerenciamento";
import { ITendenciaDTO } from "../../types/tendencia";
import { IColchaoAgendamentoDTO } from "../../types/colchaoAgendamento";

const basePath = "/gerenciamento";

export class Gerenciamento {
  static async geral({
    dataInicio,
    dataFim,
  }: IGerenciamentoProps): Promise<AxiosResponse<IGerenciamentoDTO>> {
    return ApiBrave.get(
      `${basePath}/geral?dataInicio=${dataInicio}&dataFim=${dataFim}`
    );
  }

  static async lojas({
    dataInicio,
    dataFim,
  }: IGerenciamentoProps): Promise<AxiosResponse<IGerenciamentoLojas[][]>> {
    return ApiBrave.get(
      `${basePath}/lojas?dataInicio=${dataInicio}&dataFim=${dataFim}`
    );
  }

  static async producao({
    dataInicio,
    dataFim,
  }: IGerenciamentoProps): Promise<AxiosResponse<IGerenciamentoProducao[][]>> {
    return ApiBrave.get(
      `${basePath}/producao?dataInicio=${dataInicio}&dataFim=${dataFim}`
    );
  }

  static async tendencia(): Promise<AxiosResponse<ITendenciaDTO[]>> {
    return ApiBrave.get(`${basePath}/tendencia`);
  }

  static async colchaoDeAgendamentos(): Promise<AxiosResponse<IColchaoAgendamentoDTO[]>> {
    return ApiBrave.get(`${basePath}/colchao-de-agendamentos`);
  }
}
