import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SubTitle } from "../../Atoms/SubTitle";
import { LineChart } from "@mui/x-charts";
import { useDataTendencia } from "./useData";

export const TendenciesTemplate = () => {
  const {
    dadosQuantidades,
    dadosValores,
    axisLinear,
  } = useDataTendencia();

  return (
    <LayoutTemplate title="Dashboard de Tendência">
      <S.Container>
        <SubTitle>QUANTIDADE TOTAL DE VISTORIAS</SubTitle>

        <S.Card>
          <LineChart
            xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
            series={dadosQuantidades || []}
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
            xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
            series={dadosValores || []}
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
