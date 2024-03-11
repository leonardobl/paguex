import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";

export const HomeTemplate = () => {
  return (
    <LayoutTemplate>
      <S.FormDateFilter>
        <div>
          <S.Label>Data Inicial</S.Label>
          <InputDate placeholderText="___/___/___" onChange={() => ""} />
        </div>
        <div>
          <S.Label>Data Final</S.Label>
          <InputDate placeholderText="___/___/___" onChange={() => ""} />
        </div>
        <div>
          <Button>Filtrar</Button>
        </div>
      </S.FormDateFilter>
      <S.WrapperListCards>
        <S.ListCards>
          <S.Card>
            <p>Ticket Médio</p>
            <span>R$127,65</span>
          </S.Card>
          <S.Card>
            <p>Revistorias</p>
            <span>12</span>
          </S.Card>
          <S.Card>
            <p>Total Loja</p>
            <span>1101</span>
          </S.Card>
          <S.Card>
            <p>Total Móvel</p>
            <span>248</span>
          </S.Card>
          <S.Card className="active">
            <p>Total Vistorias</p>
            <span>1349</span>
          </S.Card>
        </S.ListCards>
        <S.ListCards>
          <S.Card>
            <p>Móvel Obrigatório</p>
            <span>183</span>
          </S.Card>
          <S.Card>
            <p>Móvel Não Obri.</p>
            <span>65</span>
          </S.Card>
        </S.ListCards>
      </S.WrapperListCards>
    </LayoutTemplate>
  );
};
