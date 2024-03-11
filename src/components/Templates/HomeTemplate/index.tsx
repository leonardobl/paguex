import React, { useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";

export const HomeTemplate = () => {
  const [seriesNb, setSeriesNb] = useState(2);
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
            height={240}
            slotProps={{
              legend: {
                position: {
                  vertical: "bottom",
                  horizontal: "right",
                },
                labelStyle: { fontSize: 12 },
                itemMarkWidth: 10,
                itemMarkHeight: 10,
                markGap: 5,
                itemGap: 10,
              },
            }}
            series={[
              { data: [3, 4, 1, 6, 5], label: "Series A1", color: "red" },
              { data: [4, 3, 1, 5, 8], label: "Series A2", color: "blue" },
            ]}
            skipAnimation={true}
          />
        </S.CardVistoria>
      </S.FlexWrapperGraficos>
    </LayoutTemplate>
  );
};
