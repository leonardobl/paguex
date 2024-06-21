import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IProductivitySurveyorProps } from "../../../types/gerenciamento";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  empresa: z.string().optional(),
  loja: z.string().optional(),
});

export const useFormFilterProductivitySurveyor = () => {
  const { handleSubmit, control } = useForm<IProductivitySurveyorProps>({
    defaultValues: {
      empresa: "",
      loja: "",
    },
    resolver: zodResolver(schema),
  });
  return { Controller, handleSubmit, control };
};
