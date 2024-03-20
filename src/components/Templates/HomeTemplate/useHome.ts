import React, { useEffect, useState } from "react";
import {
  Gerenciamento,
  IGerenciamentoProps,
} from "../../../services/Gerenciamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IGerenciamentoGeral,
  IGerenciamentoLojas,
  IGerenciamentoProducao,
} from "../../../types/gerenciamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import dayjs from "dayjs";

type FilterDateTypes = {
  dataIncio: Date;
  dataFim: Date;
};

type ProducaoProps = {
  datas: Date[];
  vistorias: number[][];
};

export const useHome = () => {
  const { setIsLoad } = useContextSite();
  const [filterDate, setFilterDate] = useState<FilterDateTypes>({
    dataIncio: new Date(),
    dataFim: new Date(),
  } as FilterDateTypes);
  const [dataGeral, setDataGeral] = useState<IGerenciamentoGeral[]>(
    [] as IGerenciamentoGeral[]
  );
  const [dataLojas, setDataLojas] = useState<IGerenciamentoLojas[][]>([
    [],
  ] as IGerenciamentoLojas[][]);
  const [dataProducao, setDataProducao] = useState<IGerenciamentoProducao[][]>([
    [],
  ] as IGerenciamentoProducao[][]);
  const [producao, setProducao] = useState<ProducaoProps>({
    datas: [],
    vistorias: [],
  } as ProducaoProps);

  async function getDataGeral(dates: IGerenciamentoProps) {
    const result = await Gerenciamento.geral(dates);
    return result;
  }
  async function getDataLojas(dates: IGerenciamentoProps) {
    const result = await Gerenciamento.lojas(dates);
    return result;
  }

  async function getDataProducao(dates: IGerenciamentoProps) {
    const result = await Gerenciamento.producao(dates);
    return result;
  }

  async function handleFilter(e?: React.SyntheticEvent) {
    e?.preventDefault();

    setIsLoad(true);

    const FILTER = {
      dataInicio: reverseToIsoDate(filterDate?.dataIncio?.toLocaleDateString()),
      dataFim: reverseToIsoDate(filterDate?.dataFim?.toLocaleDateString()),
    };

    try {
      const geral = await getDataGeral(FILTER);
      setDataGeral(geral.data);

      const lojas = await getDataLojas(FILTER);
      setDataLojas(lojas.data);

      const producao = await getDataProducao(FILTER);
      setDataProducao(producao.data);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoad(false);
    }
  }

  useEffect(() => {
    const todasAsDatas: Date[] = dataProducao?.reduce(
      (datas: Date[], arrayDeVistorias) => {
        const datasArray = arrayDeVistorias?.map((item) => {
          return dayjs(item.data).toDate();
        });
        return [...datas, ...datasArray];
      },
      []
    );

    const todasAsVistorias = dataProducao?.map((loja) =>
      loja?.map((vistoria) => vistoria.vistorias)
    );

    setProducao({ datas: todasAsDatas, vistorias: todasAsVistorias });
  }, [dataProducao]);

  useEffect(() => {
    handleFilter();
  }, []);

  return {
    filterDate,
    setFilterDate,
    handleFilter,
    dataGeral,
    dataLojas,
    producao,
  };
};
