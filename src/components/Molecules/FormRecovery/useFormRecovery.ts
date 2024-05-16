import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  senha: z.string({ message: "campo obrigatorio" }),
  confirmSenha: z.string({ message: "campo obrigatorio" }),
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
