import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { SubTitle } from "../../Atoms/SubTitle";
import { useDataColchaoAgendamentos } from "./useData";
import { FormFilterMattress } from "../../Molecules/FormFilterMattress";

export const MattressTemplate = () => {
  const { dados } = useDataColchaoAgendamentos();

  return (
    <LayoutTemplate title="Colchão de Agendamentos">
      <S.Container>
        <FormFilterMattress />

        <SubTitle>vistoria de transferência</SubTitle>

        <p>
          A quantidade se refere ao volume de vistorias pagas e ainda não
          realizadas por cada uma das empresas.{" "}
        </p>

        <S.WrapperCards>
          {dados.map((empresa) => (
            <S.Card>
              <p>{empresa.empresa.toUpperCase()}</p>
              <span>{empresa.relatorio.quantidadeTransferencia}</span>
            </S.Card>
          ))}
        </S.WrapperCards>

        <SubTitle>primeiro emplacamento</SubTitle>

        <p>
          A quantidade se refere ao volume de vistorias pagas e ainda não
          realizadas por cada uma das empresas.
        </p>

        <S.WrapperCards>
          {dados.map((empresa) => (
            <S.Card>
              <p>{empresa.empresa.toUpperCase()}</p>
              <span>{empresa.relatorio.quantidadePrimeiroEmplacamento}</span>
            </S.Card>
          ))}
        </S.WrapperCards>
      </S.Container>
    </LayoutTemplate>
  );
};
