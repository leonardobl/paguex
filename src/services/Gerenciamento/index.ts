import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IGerenciamentoGeral,
  IGerenciamentoLojas,
  IGerenciamentoProducao,
} from "../../types/gerenciamento";

const basePath = "/gerenciamento";

export interface IGerenciamentoProps {
  dataInicio: string;
  dataFim: string;
}

export class Gerenciamento {
  static async geral({
    dataInicio,
    dataFim,
  }: IGerenciamentoProps): Promise<AxiosResponse<IGerenciamentoGeral[]>> {
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
}
