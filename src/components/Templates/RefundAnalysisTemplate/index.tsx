import { FormFilterRefundAnalysis } from "../../Molecules/FormFilterRefundAnalysis";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";

export const RefundAnalysisTemplate = () => {
  return (
    <LayoutTemplate title="Reembolsos - Analítico">
      <S.Container>
        <S.WrapperFilter>
          <FormFilterRefundAnalysis submitForm={() => ""} />
        </S.WrapperFilter>

        <S.ButtonExport>
          <img alt="icon download" src="/assets/svg/icon-export-down.svg" />{" "}
          Exportar
        </S.ButtonExport>
      </S.Container>
    </LayoutTemplate>
  );
};
