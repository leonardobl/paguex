import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IReembolsoProps } from "../../../types/gerenciamento";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  dataFim: z.string().optional(),
  dataInicio: z.string().optional(),
  empresa: z.string().optional(),
  loja: z.string().optional(),
  tipoAgendamento: z.string().optional(),
  tipoServico: z.string().optional(),
});

export const useFormFilterRepayment = () => {
  const [dataInicio, setDataInicio] = useState<Date | null>(null);
  const [dataFim, setDataFim] = useState<Date | null>(null);

  const { control, handleSubmit } = useForm<IReembolsoProps>({
    defaultValues: {
      dataFim: "",
      dataInicio: "",
      empresa: "",
      loja: "",
      tipoAgendamento: "",
      tipoServico: "",
    },
    resolver: zodResolver(schema),
  });

  return {
    Controller,
    control,
    handleSubmit,
    dataInicio,
    setDataInicio,
    dataFim,
    setDataFim,
  };
};
