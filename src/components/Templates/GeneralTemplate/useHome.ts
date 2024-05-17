import React, { useEffect, useState } from "react";
import { Gerenciamento } from "../../../services/Gerenciamento";
import {
  reverseToBrDate,
  reverseToIsoDate,
} from "../../../utils/dateTransform";
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
  const [dataLinear, setDataLinear] = useState([]);
  const [axisLinear, setAxisLinear] = useState([]);
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

  const formatLineChartData = (data) => {
    const dates = [];
    const series = data.map((empresa) => {
      empresa.producao.forEach((producao) => {
        if (!dates.includes(producao.data)) {
          dates.push(producao.data);
        }
      });
      return {
        label: empresa.empresa,
        data: empresa.producao.map((producao) => producao.vistorias),
      };
    });

    setDataLinear(series);
    setAxisLinear(dates.map(reverseToBrDate));

    return { dates: dates.map(reverseToBrDate), series };
  };

  function handleFilter(e?: React.SyntheticEvent) {
    e?.preventDefault();

    setIsLoad(true);

    const FILTER = {
      dataInicio: reverseToIsoDate(filterDate?.dataIncio?.toLocaleDateString()),
      dataFim: reverseToIsoDate(filterDate?.dataFim?.toLocaleDateString()),
    };

    getDataGeral(FILTER)
      .then(({ data }) => {
        formatLineChartData(data.producaoDiaria);
        setDataGeral(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  useEffect(() => {
    handleFilter();
  }, []);

  return {
    filterDate,
    setFilterDate,
    handleFilter,
    dataGeral,
    dataLinear,
    axisLinear,
  };
};
