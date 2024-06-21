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
        <S.WrapperFilter>
          <FormFilterMattress submitForm={(e) => console.log(e)} />
        </S.WrapperFilter>

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

        <SubTitle>Tempo de espera para agendamento</SubTitle>

        <S.Table>
          <S.THead>
            <tr>
              <td rowSpan={2}>Empresa</td>
              <td rowSpan={2}>Loja</td>
              <td colSpan={2}>Espera</td>
            </tr>
            <tr>
              <td>Loja</td>
              <td>Móvel</td>
            </tr>
          </S.THead>

          <S.TBody>
            <tr>
              <td>Starcheck</td>
              <td>São Luís</td>
              <td>D0</td>
              <td>D0</td>
            </tr>

            <tr>
              <td>Log</td>
              <td>Timon</td>
              <td>D+1</td>
              <td>D+1</td>
            </tr>

            <tr>
              <td>Tokyo</td>
              <td>Chapadinha</td>
              <td>D+2</td>
              <td>D+2</td>
            </tr>

            <tr>
              <td>VLX</td>
              <td>Imperatriz</td>
              <td>D+1</td>
              <td>D+2</td>
            </tr>
          </S.TBody>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
