import React from "react";
import * as S from "./styles";
import { useLogin } from "./useLogin";
import { Input } from "../../Atoms/Inputs/Input";

export const LoginTemplate = () => {
  const { navigate, handleSubmit, form, setForm, handleCpf } = useLogin();

  return (
    <S.Container>
      <S.LeftSide>
        <img src="/assets/img/big-brave.png" alt="leao brave" />
      </S.LeftSide>
      <S.RigthSide>
        <h1>Login</h1>
        <p>Preencha o formulário abaixo para fazer login.</p>
        <S.Form>
          <div>
            <S.Label>CPF</S.Label>
            <Input />
          </div>
          <div>
            <S.Label>Senha</S.Label>
            <Input />
            <button className="button-forgot">Esqueceu sua senha?</button>
          </div>
          <div>
            <button className="send">Entrar</button>
          </div>
        </S.Form>
      </S.RigthSide>
    </S.Container>
  );
};
