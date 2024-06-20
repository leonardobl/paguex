import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormFilterRepayment } from "../../Molecules/FormFilterRepayment";

export const RepaymentTemplate = () => {
  return (
    <LayoutTemplate title="Dashboard de Reembolsos">
      <S.Container>
        <FormFilterRepayment />
      </S.Container>
    </LayoutTemplate>
  );
};
