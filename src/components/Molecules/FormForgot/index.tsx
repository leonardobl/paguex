import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormForgot } from "./useFormForgot";
import { Input } from "../../Atoms/Inputs/Input";
import { MessageErro } from "../../Atoms/MessageErro";

interface IFormForgotProps extends ComponentProps<"form"> {
  onSubitForm: (data: any) => void;
}

export const FormForgot = ({ onSubitForm, ...rest }: IFormForgotProps) => {
  const { handleSubmit, register, errors } = useFormForgot();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubitForm)}>
      <div>
        <S.Label>CPF</S.Label>
        <Input {...register("cpf")} maxLength={14} />
        {errors?.cpf?.message && (
          <MessageErro>{errors?.cpf?.message}</MessageErro>
        )}
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </S.Form>
  );
};
