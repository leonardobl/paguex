import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { SubTitle } from "../../Atoms/SubTitle";

export const MattressTemplate = () => {
  return (
    <LayoutTemplate title="Colchão de Agendamentos">
      <S.Container>
        <SubTitle>vistoria de transferência</SubTitle>

        <p>
          A quantidade se refere ao volume de vistorias pagas e ainda não
          realizadas por cada uma das empresas.{" "}
        </p>

        <S.WrapperCards>
          <S.Card>
            <p>Starcheck</p>
            <span>1320</span>
          </S.Card>
          <S.Card>
            <p>LOG</p>
            <span>250</span>
          </S.Card>
          <S.Card>
            <p>Tokyo</p>
            <span>45</span>
          </S.Card>
          <S.Card>
            <p>Velox</p>
            <span>789</span>
          </S.Card>
        </S.WrapperCards>

        <SubTitle>primeiro emplacamento</SubTitle>

        <p>
          A quantidade se refere ao volume de vistorias pagas e ainda não
          realizadas por cada uma das empresas.
        </p>

        <S.WrapperCards>
          <S.Card>
            <p>Starcheck</p>
            <span>1320</span>
          </S.Card>
          <S.Card>
            <p>LOG</p>
            <span>250</span>
          </S.Card>
          <S.Card>
            <p>Tokyo</p>
            <span>45</span>
          </S.Card>
          <S.Card>
            <p>Velox</p>
            <span>789</span>
          </S.Card>
        </S.WrapperCards>
      </S.Container>
    </LayoutTemplate>
  );
};
