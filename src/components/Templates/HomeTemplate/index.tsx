import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { useHome } from "./useHome";
import { maskMoney } from "../../../utils/masks";

export const HomeTemplate = () => {
  const { filterDate, setFilterDate, handleFilter, dataGeral } = useHome();

  return (
    <LayoutTemplate>
      <S.FormDateFilter onSubmit={handleFilter}>
        <div>
          <S.Label>Data Inicial</S.Label>
          <InputDate
            required
            selected={filterDate?.dataIncio}
            placeholderText="___/___/___"
            onChange={(e) =>
              setFilterDate((prev) => ({ ...prev, dataIncio: e }))
            }
          />
        </div>
        <div>
          <S.Label>Data Final</S.Label>
          <InputDate
            required
            selected={filterDate?.dataFim}
            placeholderText="___/___/___"
            onChange={(e) => setFilterDate((prev) => ({ ...prev, dataFim: e }))}
          />
        </div>
        <div>
          <Button>Filtrar</Button>
        </div>
      </S.FormDateFilter>
      <S.WrapperListCards>
        <S.ListCards>
          <S.Card>
            <p>Ticket Médio</p>
            <span>
              {maskMoney(dataGeral?.total / dataGeral?.quantidade) || "R$ 0,00"}
            </span>
          </S.Card>
          <S.Card>
            <p>Revistorias</p>
            <span>{dataGeral?.quantidadeRevistoria | 0}</span>
          </S.Card>
          <S.Card>
            <p>Total Loja</p>
            <span>{dataGeral?.totalLoja | 0}</span>
          </S.Card>
          <S.Card>
            <p>Total Móvel</p>
            <span>{dataGeral?.totalMovel | 0}</span>
          </S.Card>
          <S.Card className="active">
            <p>Total Vistorias</p>
            <span>{(dataGeral?.totalLoja + dataGeral?.totalMovel) | 0}</span>
          </S.Card>
        </S.ListCards>
        <S.ListCards>
          <S.Card>
            <p>Móvel Obrigatório</p>
            <span>{dataGeral?.quantidadeMovelObrigatorio | 0}</span>
          </S.Card>
          <S.Card>
            <p>Móvel Não Obri.</p>
            <span>{dataGeral?.quantidadeMovelNaoObrigatorio | 0}</span>
          </S.Card>
        </S.ListCards>
      </S.WrapperListCards>
      <S.FlexWrapperGraficos>
        <S.CardVistoria>
          <S.TitleCard>Vistorias (%)</S.TitleCard>
          <BarChart
            slotProps={{
              legend: {
                position: {
                  vertical: "bottom",
                  horizontal: "right",
                },
                // padding: 0,
                labelStyle: { fontSize: 12 },
                itemMarkWidth: 10,
                itemMarkHeight: 10,
                markGap: 5,
                itemGap: 10,
              },
            }}
            series={[
              { data: [3, 4, 1, 6, 5], label: "Series A1", color: "#2556CC" },
              { data: [4, 3, 1, 5, 8], label: "Series A2", color: "#54ACF2" },
            ]}
            skipAnimation={true}
          />
        </S.CardVistoria>
        <S.CardProducao>
          <S.TitleCard>PRODUÇÃO DIÁRIA TOTAL DE VISTORIAS</S.TitleCard>
          <LineChart
            series={[
              { curve: "linear", data: [0, 5, 2, 6, 3, 9.3], label: "a" },
              { curve: "linear", data: [6, 3, 7, 9.5, 4, 2], label: "b" },
              { curve: "linear", data: [2, 3, 7, 6, 1, 2], label: "c" },
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
        </S.CardProducao>
      </S.FlexWrapperGraficos>
      <S.ExportButton>
        <img src={"/assets/svg/export-icon.svg"} alt="icone exportacao" />{" "}
        Exportar
      </S.ExportButton>

      <S.Table>
        <S.TableHead>
          <h4>Empresa</h4>
          <h4>Loja</h4>
          <h4>Qtd. Loja</h4>
          <h4>%Loja</h4>
          <h4>Qtd. Móvel</h4>
          <h4>%Móvel</h4>
          <h4>Revistorias </h4>
          <h4>Móvel Obrigatório</h4>
          <h4>Móvel Não Obrigatório</h4>
          <h4>Total</h4>
        </S.TableHead>
        <S.TableRow>
          <p>StarCheck</p>
          <p>São Luís</p>
          <p>40</p>
          <p>40%</p>
          <p>20</p>
          <p>20%</p>
          <p>40</p>
          <p>10</p>
          <p>10</p>
          <p>Total</p>
        </S.TableRow>
        <S.TableRow>
          <p>Log Vist.</p>
          <p>São Luís</p>
          <p>40</p>
          <p>40%</p>
          <p>20</p>
          <p>20%</p>
          <p>40</p>
          <p>10</p>
          <p>10</p>
          <p>Total</p>
        </S.TableRow>
        <S.TableRow>
          <p>Tokyo Vist.</p>
          <p>São Luís</p>
          <p>40</p>
          <p>40%</p>
          <p>20</p>
          <p>20%</p>
          <p>40</p>
          <p>10</p>
          <p>10</p>
          <p>Total</p>
        </S.TableRow>
      </S.Table>
    </LayoutTemplate>
  );
};
