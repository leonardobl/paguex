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

        <S.Table>
          <S.TableHeader>
            <h3>Empresa</h3>
            <h3>Unidade</h3>
            <h3>Tipo de Atendimento</h3>
            <h3>Tipo deserviço</h3>
            <h3>Placa/Chassi</h3>
            <h3>Valor</h3>
          </S.TableHeader>

          <S.TableItem>
            <p>StarCheck</p>
            <p>São Luís</p>
            <p>Loja</p>
            <p>Transferência</p>
            <p>xxxxxxxxxxxxxxxxxx</p>
            <p>R$00,00</p>
          </S.TableItem>

          <S.TableItem>
            <p>StarCheck</p>
            <p>São Luís</p>
            <p>Itinerante</p>
            <p>1° Emplacamento</p>
            <p>xxxxxxxxxxxxxxxxxx</p>
            <p>R$00,00</p>
          </S.TableItem>

          <S.TableItem>
            <p>StarCheck</p>
            <p>Timon</p>
            <p>Loja</p>
            <p>Transferência</p>
            <p>xxxxxxxxxxxxxxxxxx</p>
            <p>R$00,00</p>
          </S.TableItem>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
