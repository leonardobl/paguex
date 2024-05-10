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
            <span>{maskMoney(dataGeral?.ticketMedio) || "R$ 0,00"}</span>
          </S.Card>
          <S.Card>
            <p>Revistorias</p>
            <span>{dataGeral?.revistorias | 0}</span>
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
            <span>{dataGeral?.totalVistorias | 0}</span>
          </S.Card>
        </S.ListCards>
        <S.ListCards>
          <S.Card>
            <p>Móvel Obrigatório</p>
            <span>{dataGeral?.movelObrigatorio | 0}</span>
          </S.Card>
          <S.Card>
            <p>Móvel Não Obri.</p>
            <span>{dataGeral?.movelNaoObrigatorio | 0}</span>
          </S.Card>
        </S.ListCards>
      </S.WrapperListCards>
      <S.FlexWrapperGraficos>
        <S.CardVistoria>
          <S.TitleCard>Vistorias (%)</S.TitleCard>
          <BarChart
            xAxis={[{ scaleType: "band", data: ["Lojas", "Deliverys"] }]}
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
            // series={[
            //   { data: [3, 4, 1, 6, 5], label: "Series A1", color: "#2556CC" },
            //   { data: [4, 3, 1, 5, 8], label: "Series A2", color: "#54ACF2" },
            // ]}
            series={
              dataGeral?.empresas?.map((item) => ({
                data: [item.qtdLoja, item.qtdDelivery],
                label: item?.empresa,
              })) || []
            }
            skipAnimation={true}
          />
        </S.CardVistoria>
        <S.CardProducao>
          <S.TitleCard>PRODUÇÃO DIÁRIA TOTAL DE VISTORIAS</S.TitleCard>
          <LineChart
            xAxis={[
              {
                data: dataGeral?.producaoDiaria,
                tickInterval: dataGeral.producaoDiaria,
                scaleType: "time",
                valueFormatter: (date) => dayjs(date)?.format("DD/MM/YYYY"),
              },
            ]}
            // series={dataGeral?.totalVistorias?.map((data) => ({
            //   // label: "Teste " + idx,
            //   data: data,
            //   label: "Tokyo-Vistorias",
            // }))}
            series={[]?.map((data) => ({
              // label: "Teste " + idx,
              data: data,
              label: "Tokyo-Vistorias",
            }))}
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
        {/* {data.map((item) =>
          item.map((_) => (
            <S.TableRow key={Math.random()}>
              <p>{_.nome || "---"}</p>
              <p>{_.cidade || "---"}</p>
              <p>{_.quantidadeLoja || 0}</p>
              <p>{_.quantidadeLoja.toFixed(2)}%</p>
              <p>{_.quantidadeMovel || 0}</p>
              <p>20%</p>
              <p>40</p>
              <p>10</p>
              <p>10</p>
              <p>Total</p>
            </S.TableRow>
          ))
        )} */}
      </S.Table>
    </LayoutTemplate>
  );
};
