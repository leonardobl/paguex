import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { useFormRecovery } from "./useFormRecovery";
import { MessageErro } from "../../Atoms/MessageErro";

interface IFormRecoveryProps extends ComponentProps<"form"> {
  onSubmitForm: (data: any) => void;
}

export const FormRecovery = ({ onSubmitForm, ...rest }: IFormRecoveryProps) => {
  const { errors, handleSubmit, register } = useFormRecovery();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <S.Label>Senha</S.Label>
        <Input {...register("senha")} type="password" />
        {errors?.senha && <MessageErro>{errors?.senha?.message}</MessageErro>}
      </div>
      <div>
        <S.Label>Confirmar Senha</S.Label>
        <Input {...register("confirmSenha")} type="password" />
        {errors?.confirmSenha && (
          <MessageErro>{errors?.confirmSenha?.message}</MessageErro>
        )}
      </div>
      <div>
        <button>Alterar</button>
      </div>
    </S.Form>
  );
};
