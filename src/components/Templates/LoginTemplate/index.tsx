import React from "react";
import * as S from "./styles";
import { useLogin } from "./useLogin";
import { Input } from "../../Atoms/Inputs/Input";
import { MessageErro } from "../../Atoms/MessageErro";

export const LoginTemplate = () => {
  const { navigate, handleSubmit, onSubmit, register, errors } = useLogin();

  return (
    <S.Container>
      <S.LeftSide>
        <img src="/assets/img/big-brave.png" alt="" />
      </S.LeftSide>
      <S.RigthSide>
        <h1>Login</h1>
        <p>Preencha o formulário abaixo para fazer login.</p>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <S.Label>CPF</S.Label>
            <Input {...register("cpfCNPJ")} id="cpf" maxLength={14} />
            {errors?.cpfCNPJ && (
              <MessageErro>{errors.cpfCNPJ.message}</MessageErro>
            )}
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
      </S.RigthSide>
    </S.Container>
  );
};
