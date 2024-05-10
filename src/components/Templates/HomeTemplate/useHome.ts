import React, { useEffect, useState } from "react";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import {
  IGerenciamentoDTO,
  IGerenciamentoProps,
} from "../../../types/gerenciamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

type FilterDateTypes = {
  dataIncio: Date;
  dataFim: Date;
};

export const useHome = () => {
  const { setIsLoad } = useContextSite();
  const [filterDate, setFilterDate] = useState<FilterDateTypes>({
    dataIncio: new Date(),
    dataFim: new Date(),
  } as FilterDateTypes);
  const [dataGeral, setDataGeral] = useState<IGerenciamentoDTO>(
    {} as IGerenciamentoDTO
  );

  async function getDataGeral(dates: IGerenciamentoProps) {
    const result = await Gerenciamento.geral(dates);
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
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoad(false);
    }
  }

  useEffect(() => {
    handleFilter();
  }, []);

  return {
    filterDate,
    setFilterDate,
    handleFilter,
    dataGeral,
  };
};
