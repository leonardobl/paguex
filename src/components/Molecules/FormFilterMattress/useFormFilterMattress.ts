import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IColchaoAgendamentoProps } from "../../../types/gerenciamento";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  empresa: z.string().optional(),
  loja: z.string().optional(),
  tipoAtendimento: z.string().optional(),
  tipoServico: z.string().optional(),
});

export const useFormFilterMattress = () => {
  const { control, handleSubmit } = useForm<IColchaoAgendamentoProps>({
    defaultValues: {
      empresa: "",
      loja: "",
      tipoAtendimento: "",
      tipoServico: "",
    },
    resolver: zodResolver(schema),
  });
  return { Controller, control, handleSubmit };
};
