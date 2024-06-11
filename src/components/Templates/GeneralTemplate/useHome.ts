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
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FilterDateTypes = {
  dataIncio?: Date;
  dataFim?: Date;
  empresa?: string;
};

const schema = z.object({
  dataIncio: z.date().nullable().optional(),
  dataFim: z.date().nullable().optional(),
  empresa: z.string().min(1).optional().or(z.literal("")),
});

const CidadeOptions = [
  {
    label: "Log",
    value: "Log",
  },
  {
    label: "Starcheck",
    value: "Starcheck",
  },
  {
    label: "Tokyo",
    value: "Tokyo",
  },
  {
    label: "Velox",
    value: "Velox",
  },
];

export const useHome = () => {
  const { setIsLoad } = useContextSite();
  const [dataLinear, setDataLinear] = useState([]);
  const [axisLinear, setAxisLinear] = useState([]);

  const [dataGeral, setDataGeral] = useState<IGerenciamentoDTO>(
    {} as IGerenciamentoDTO
  );

  const { register, control, handleSubmit } = useForm<FilterDateTypes>({
    defaultValues: {
      dataFim: new Date(),
      dataIncio: new Date(),
      empresa: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

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

  function handleFilter(data: FilterDateTypes) {
    setIsLoad(true);

    const FILTER = {
      dataInicio: reverseToIsoDate(data?.dataIncio?.toLocaleDateString()),
      dataFim: reverseToIsoDate(data?.dataFim?.toLocaleDateString()),
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
    const dataInicio = reverseToIsoDate(new Date()?.toLocaleDateString());
    const dataFim = reverseToIsoDate(new Date()?.toLocaleDateString());

    getDataGeral({
      dataInicio,
      dataFim,
    });
  }, []);

  return {
    handleFilter,
    dataGeral,
    dataLinear,
    axisLinear,
    register,
    Controller,
    control,
    handleSubmit,
    CidadeOptions,
  };
};
