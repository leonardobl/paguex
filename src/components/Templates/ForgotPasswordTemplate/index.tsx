import React from "react";
import * as S from "./styles";
import { LayoutNoUserTemplate } from "../LayoutNoUserTemplate";
import { FormForgot } from "../../Molecules/FormForgot";
import { useForgotPassword } from "./useForgotPassword";

export const ForgotPasswordTemplate = () => {
  const { onSubmitForm } = useForgotPassword();

  return (
    <LayoutNoUserTemplate>
      <S.Container>
        <h1>Esqueceu sua senha?</h1>
        <p>
          Coloque o seu <span>CPF</span> e enviaremos um <span>link</span> para
          alterá-la.
        </p>

        <FormForgot onSubitForm={onSubmitForm} />
      </S.Container>
    </LayoutNoUserTemplate>
  );
};
