import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormLogin } from "./useFormLogin";
import { MessageErro } from "../../Atoms/MessageErro";
import { Input } from "../../Atoms/Inputs/Input";
import { IAutenticacaoForm } from "../../../types/autenticacao";

interface IFormLoginProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IAutenticacaoForm) => void;
}

export const FormLogin = ({ onSubmitForm, ...rest }: IFormLoginProps) => {
  const { errors, handleSubmit, register, navigate } = useFormLogin();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <S.Label>CPF</S.Label>
        <Input {...register("cpfCNPJ")} id="cpf" maxLength={14} />
        {errors?.cpfCNPJ && <MessageErro>{errors.cpfCNPJ.message}</MessageErro>}
      </div>
      <div>
        <S.Label>Senha</S.Label>
        <Input {...register("senha")} id="senha" type="password" />
        {errors?.senha && <MessageErro>{errors.senha.message}</MessageErro>}
        <button
          className="button-forgot"
          type="button"
          onClick={() => navigate("/esqueci-senha")}
        >
          Esqueceu sua senha?
        </button>
      </div>
      <div>
        <button className="send">Entrar</button>
      </div>
    </S.Form>
  );
};
