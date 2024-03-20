import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { useHome } from "./useHome";
import { maskMoney } from "../../../utils/masks";
import dayjs from "dayjs";

const data = [
  [
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 0,
      total: 0,
      quantidade: 9,
      quantidadeLoja: 0,
      totalMovel: 0,
      quantidadeMovel: 9,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 0,
      quantidadeMovelNaoObrigatorio: 0,
      nome: "Delivery Balsas",
      uf: "MA",
      cidade: "Balsas",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 0,
      total: 0,
      quantidade: 4,
      quantidadeLoja: 0,
      totalMovel: 0,
      quantidadeMovel: 4,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 0,
      quantidadeMovelNaoObrigatorio: 0,
      nome: "Delivery Timon",
      uf: "MA",
      cidade: "Timon",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 153,
      total: 153,
      quantidade: 64,
      quantidadeLoja: 58,
      totalMovel: 0,
      quantidadeMovel: 6,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 153,
      quantidadeMovelNaoObrigatorio: 58,
      nome: "Starcheck Filial Inter",
      uf: "MA",
      cidade: "Imperatriz",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 31305,
      total: 31305,
      quantidade: 68,
      quantidadeLoja: 68,
      totalMovel: 0,
      quantidadeMovel: 0,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 31305,
      quantidadeMovelNaoObrigatorio: 68,
      nome: "Starcheck Matriz Inter",
      uf: "MA",
      cidade: "São Luís",
    },
  ],

  [
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 0,
      total: 0,
      quantidade: 9,
      quantidadeLoja: 0,
      totalMovel: 0,
      quantidadeMovel: 9,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 0,
      quantidadeMovelNaoObrigatorio: 0,
      nome: "Delivery Balsas",
      uf: "MA",
      cidade: "Balsas",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 0,
      total: 0,
      quantidade: 4,
      quantidadeLoja: 0,
      totalMovel: 0,
      quantidadeMovel: 4,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 0,
      quantidadeMovelNaoObrigatorio: 0,
      nome: "Delivery Timon",
      uf: "MA",
      cidade: "Timon",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 153,
      total: 153,
      quantidade: 64,
      quantidadeLoja: 58,
      totalMovel: 0,
      quantidadeMovel: 6,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 153,
      quantidadeMovelNaoObrigatorio: 58,
      nome: "Starcheck Filial Inter",
      uf: "MA",
      cidade: "Imperatriz",
    },
    {
      quantidadeRevistoria: 0,
      totalMovelObrigatorio: 0,
      totalLoja: 31305,
      total: 31305,
      quantidade: 68,
      quantidadeLoja: 68,
      totalMovel: 0,
      quantidadeMovel: 0,
      totalRevistoria: 0,
      quantidadeMovelObrigatorio: 0,
      totalMovelNaoObrigatorio: 31305,
      quantidadeMovelNaoObrigatorio: 68,
      nome: "Starcheck Matriz Inter",
      uf: "MA",
      cidade: "São Luís",
    },
  ],
];

export const HomeTemplate = () => {
  const {
    filterDate,
    setFilterDate,
    handleFilter,
    dataGeral,
    dataLojas,
    producao,
  } = useHome();

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
              {maskMoney(dataGeral[0]?.total / dataGeral[0]?.quantidade) ||
                "R$ 0,00"}
            </span>
          </S.Card>
          <S.Card>
            <p>Revistorias</p>
            <span>{dataGeral[0]?.quantidadeRevistoria | 0}</span>
          </S.Card>
          <S.Card>
            <p>Total Loja</p>
            <span>{dataGeral[0]?.totalLoja | 0}</span>
          </S.Card>
          <S.Card>
            <p>Total Móvel</p>
            <span>{dataGeral[0]?.totalMovel | 0}</span>
          </S.Card>
          <S.Card className="active">
            <p>Total Vistorias</p>
            <span>
              {(dataGeral[0]?.totalLoja + dataGeral[0]?.totalMovel) | 0}
            </span>
          </S.Card>
        </S.ListCards>
        <S.ListCards>
          <S.Card>
            <p>Móvel Obrigatório</p>
            <span>{dataGeral[0]?.quantidadeMovelObrigatorio | 0}</span>
          </S.Card>
          <S.Card>
            <p>Móvel Não Obri.</p>
            <span>{dataGeral[0]?.quantidadeMovelNaoObrigatorio | 0}</span>
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
            xAxis={[
              {
                data: producao?.datas,
                tickInterval: producao?.datas,
                scaleType: "time",
                valueFormatter: (date) => dayjs(date)?.format("DD/MM/YYYY"),
              },
            ]}
            // xAxis={producao?.datas?.map((item) => ({
            //   data: item,
            //   tickInterval: item,
            //   scaleType: "time",
            //   valueFormatter: (date) => dayjs(date).format("DD/MM/YYYY"),
            // }))}
            series={producao?.vistorias?.map((data) => ({
              // label: "Teste " + idx,
              data: data,
            }))}
            // series={producao?.vistorias?.map((item, idx) => ({
            //   label: "Teste " + idx,
            //   data: item,
            // }))}
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
        {data.map((item) =>
          item.map((_) => (
            <S.TableRow key={Math.random()}>
              <p>{_.nome || "---"}</p>
              <p>{_.cidade || "---"}</p>
              <p>{_.quantidadeLoja || 0}</p>
              <p>40%</p>
              <p>20</p>
              <p>20%</p>
              <p>40</p>
              <p>10</p>
              <p>10</p>
              <p>Total</p>
            </S.TableRow>
          ))
        )}
      </S.Table>
    </LayoutTemplate>
  );
};
