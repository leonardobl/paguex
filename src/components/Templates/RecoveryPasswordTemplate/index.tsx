import React from "react";
import { LayoutNoUserTemplate } from "../LayoutNoUserTemplate";
import * as S from "./styles";
import { FormRecovery } from "../../Molecules/FormRecovery";
import { useRecoveryPassword } from "./useRecoveryPassword";

export const RecoveryPasswordTemplate = () => {
  const { handleSubmitForm } = useRecoveryPassword();

  return (
    <LayoutNoUserTemplate>
      <S.Container>
        <h1>Recuperação de senha.</h1>
        <p>
          Digite sua <span>nova senha</span>.
        </p>

        <FormRecovery onSubmitForm={handleSubmitForm} />
      </S.Container>
    </LayoutNoUserTemplate>
  );
};
