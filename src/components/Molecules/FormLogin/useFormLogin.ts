import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IAutenticacaoForm } from "../../../types/autenticacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCnpj, maskCpf } from "../../../utils/masks";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  cpfCNPJ: z.string({ message: "Campo obrigatorio" }).min(14, "CPF invalido"),
  senha: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

export const useFormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IAutenticacaoForm>({
    defaultValues: {
      cpfCNPJ: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (watch("cpfCNPJ")?.length > 14) {
      setValue("cpfCNPJ", maskCnpj(watch("cpfCNPJ")));
      return;
    }
    setValue("cpfCNPJ", maskCpf(watch("cpfCNPJ")));
  }, [watch("cpfCNPJ")]);

  return { register, handleSubmit, errors, navigate };
};
