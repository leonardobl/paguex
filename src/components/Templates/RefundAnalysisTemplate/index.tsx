import { FormFilterRefundAnalysis } from "../../Molecules/FormFilterRefundAnalysis";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";

export const RefundAnalysisTemplate = () => {
  return (
    <LayoutTemplate title="Reembolsos - Analítico">
      <S.Container>
        <FormFilterRefundAnalysis submitForm={() => ""} />
      </S.Container>
    </LayoutTemplate>
  );
};
