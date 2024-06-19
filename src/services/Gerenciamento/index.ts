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
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";

const basePath = "/gerenciamento";

export class Gerenciamento {
  static async geral(props: IGerenciamentoProps): Promise<AxiosResponse<IGerenciamentoDTO>> {
    const values = removeEmpty(props)
    const params = objectToParams(values)
    return ApiBrave.get(
     params ? `${basePath}/geral?${params}` : `${basePath}/geral` 
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
