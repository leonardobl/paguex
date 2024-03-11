import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";

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
      <S.FlexWrapperGraficos>
        <S.CardVistoria>
          <S.TitleCard>Vistorias (%)</S.TitleCard>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["group A", "group B"] }]}
            series={[{ data: [3, 5] }, { data: [6, 3] }, { data: [5, 6] }]}
            height={230}
          />
          <S.WrapperLegend>
            <S.LegendCard bgColor="red">Loja Física</S.LegendCard>
            <S.LegendCard bgColor="blue">Móvel</S.LegendCard>
          </S.WrapperLegend>
        </S.CardVistoria>
      </S.FlexWrapperGraficos>
    </LayoutTemplate>
  );
};
