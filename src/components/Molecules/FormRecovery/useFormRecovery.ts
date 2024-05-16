import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    senha: z
      .string({ message: "campo obrigatorio" })
      .min(1, "campo obrigatorio"),
    confirmSenha: z
      .string({ message: "campo obrigatorio" })
      .min(1, "campo obrigatorio"),
  })
  .refine(({ confirmSenha, senha }) => confirmSenha === senha, {
    path: ["confirmSenha"],
    message: "As senhas não coferem",
  });

export const useFormRecovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      senha: "",
      confirmSenha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  return { register, handleSubmit, errors };
};
