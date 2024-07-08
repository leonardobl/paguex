import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SubTitle } from "../../Atoms/SubTitle";
import { LineChart } from "@mui/x-charts";
import { useDataTendencia } from "./useData";

export const TendenciesTemplate = () => {
  const { dadosQuantidades, dadosValores, axisLinear, desempenhos } = useDataTendencia();

  return (
    <LayoutTemplate title="Dashboard de Tendência">
      <S.Container>
        <SubTitle>QUANTIDADE TOTAL DE VISTORIAS</SubTitle>

        <S.Card>
          <LineChart
            margin={{
              bottom: 70,
            }}
            height={340}
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
            margin={{
              bottom: 70,
            }}
            height={340}
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

      <S.TableTitle>Desempenho em Relação a Meta</S.TableTitle>

      <S.Table>
        <S.TableHead>
          <tr>
            <td>Empresa</td>
            <td>Meta</td>
            <td>Realizado</td>
            <td>Média/dia</td>
            <td>Necessidade/dia</td>
            <td>Projeção</td>
          </tr>
        </S.TableHead>
        <S.TableBody>
          {desempenhos?.map((empresa) => (
            <tr key={Math.random()}>
              <td>{empresa?.empresa}</td>
              <td>{empresa?.meta}</td>
              <td>{empresa?.qtdTotal}</td>
              <td>{empresa?.qtdMedia}</td>
              <td>{empresa?.qtdMediaNecessaria}</td>
              <td>{empresa?.qtdMediaProjecao}</td>
            </tr>
          ))}
        </S.TableBody>
      </S.Table>
    </LayoutTemplate>
  );
};
