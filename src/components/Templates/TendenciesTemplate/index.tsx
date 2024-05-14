import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SubTitle } from "../../Atoms/SubTitle";
import { LineChart } from "@mui/x-charts";

export const TendenciesTemplate = () => {
  return (
    <LayoutTemplate title="Dashboard de Tendência">
      <S.Container>
        <SubTitle>QUANTIDADE TOTAL DE VISTORIAS</SubTitle>

        <S.Card>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
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
          />
        </S.Card>

        <SubTitle>VALOR TOTAL DE VISTORIAS</SubTitle>

        <S.Card>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
              {
                data: [1, 5.9, 3, 8, 3, 6],
              },
            ]}
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
          />
        </S.Card>
      </S.Container>
    </LayoutTemplate>
  );
};
