import React, { useState } from "react";
import {
  Gerenciamento,
  IGerenciamentoProps,
} from "../../../services/Gerenciamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { IGerenciamentoGeral } from "../../../types/gerenciamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

type FilterDateTypes = {
  dataIncio: Date;
  dataFim: Date;
};

export const useHome = () => {
  const { setIsLoad } = useContextSite();
  const [filterDate, setFilterDate] = useState<FilterDateTypes>(
    {} as FilterDateTypes
  );
  const [dataGeral, setDataGeral] = useState<IGerenciamentoGeral>();
  const [dataLojas, setDataLojas] = useState<IGerenciamentoGeral>();
  const [dataProducao, setDataProducao] = useState<IGerenciamentoGeral>();

  async function getDataGeral(dates: IGerenciamentoProps) {
    const result = await Gerenciamento.geral(dates);
    return result;
  }
  async function getDataLojas() {}
  async function getDataProducao() {}

  async function handleFilter(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const FILTER = {
      dataInicio: reverseToIsoDate(filterDate?.dataIncio?.toLocaleDateString()),
      dataFim: reverseToIsoDate(filterDate?.dataFim?.toLocaleDateString()),
    };

    try {
      const geral = await getDataGeral(FILTER);
      setDataGeral(geral.data[0]);
      console.log(geral);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoad(false);
    }
  }

  return { filterDate, setFilterDate, handleFilter, dataGeral };
};
