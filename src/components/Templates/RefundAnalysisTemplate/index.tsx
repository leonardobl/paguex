import { Pagination } from "../../Atoms/Pagination";
import { FormFilterRefundAnalysis } from "../../Molecules/FormFilterRefundAnalysis";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useRefundAnalysis } from "./useRefundAnalysis";

export const RefundAnalysisTemplate = () => {
  const { data, getReembolsos, isMobile, pagination, setNumberPage } =
    useRefundAnalysis();

  return (
    <LayoutTemplate title="Reembolsos - Analítico">
      <S.Container>
        <S.WrapperFilter>
          <FormFilterRefundAnalysis submitForm={getReembolsos} />
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

          {data?.length > 0 &&
            data?.map((i) => (
              <S.TableItem key={Math.random()}>
                <p>{i?.empresa}</p>
                <p>{i?.unidade}</p>
                <p>{i?.tipoAtendimento}</p>
                <p>{i?.tipoServico}</p>
                <p>{i?.placa}</p>
                <p>{i?.valor}</p>
              </S.TableItem>
            ))}

          {data?.length > 0 && (
            <Pagination
              maxPageNumbersDisplayed={isMobile ? 3 : 10}
              key={`${Math.random()} - ${pagination}`}
              totalPage={pagination.totalPage}
              totalRegister={pagination.totalPage}
              actualPage={pagination.actualPage}
              setNumberPage={setNumberPage}
            />
          )}
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
