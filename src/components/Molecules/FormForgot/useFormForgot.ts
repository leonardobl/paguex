import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { maskCnpj, maskCpf } from "../../../utils/masks";

const schema = z.object({
  cpf: z.string({ message: "Campo obrigatorio" }).min(14, "CPF invalido"),
});

export const useFormForgot = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { cpf: "" },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (watch("cpf")?.length > 14) {
      setValue("cpf", maskCnpj(watch("cpf")));
      return;
    }
    setValue("cpf", maskCpf(watch("cpf")));
  }, [watch("cpf")]);

  return { handleSubmit, register, errors };
};
