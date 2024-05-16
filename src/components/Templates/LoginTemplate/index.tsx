import React from "react";
import * as S from "./styles";
import { useLogin } from "./useLogin";
import { LayoutNoUserTemplate } from "../LayoutNoUserTemplate";
import { FormLogin } from "../../Molecules/FormLogin";

export const LoginTemplate = () => {
  const { onSubmit } = useLogin();

  return (
    <LayoutNoUserTemplate>
      <S.RigthSideContent>
        <h1>Login</h1>
        <p>Preencha o formulário abaixo para fazer login.</p>

        <FormLogin onSubmitForm={onSubmit} />
      </S.RigthSideContent>
    </LayoutNoUserTemplate>
  );
};
