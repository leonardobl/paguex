import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IGerenciamentoProducaoServicoProps } from "../../../types/gerenciamento";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  dataFim: z.string().optional(),
  dataInicio: z.string().optional(),
  empresa: z.string().optional(),
  loja: z.string().optional(),
});

export const useFormFilterProductivityService = () => {
  const { control, handleSubmit } = useForm<IGerenciamentoProducaoServicoProps>(
    {
      defaultValues: {
        dataFim: "",
        dataInicio: "",
        empresa: "",
        loja: "",
      },
      resolver: zodResolver(schema),
    }
  );

  return { control, handleSubmit, Controller };
};
