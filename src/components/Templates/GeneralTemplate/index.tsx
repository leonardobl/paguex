import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { useHome } from "./useHome";
import { maskMoney } from "../../../utils/masks";
import { reverseToBrDate } from "../../../utils/dateTransform";

export const GeneralTemplate = () => {
  const { filterDate, setFilterDate, handleFilter, dataGeral } = useHome();

  return (
    <LayoutTemplate title="Relatórios de Produção Geral">
      <S.FormDateFilter onSubmit={handleFilter}>
        <div>
          <S.Label>Data Inicial</S.Label>
          <InputDate
            required
            showIcon
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
            showIcon
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
            series={
              dataGeral?.producaoDiaria?.map((item) => ({
                label: item.empresa,
                data: [item.producao[0].vistorias],
              })) || []
            }
            xAxis={[
              {
                scaleType: "band",
                data:
                  dataGeral?.producaoDiaria?.map((item) =>
                    reverseToBrDate(item?.producao[0]?.data)
                  ) || [],
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
        {dataGeral?.lojas?.map((item) => (
          <S.TableRow key={Math.random()}>
            <p>{item?.empresa || "---"}</p>
            <p>{item?.loja || "---"}</p>
            <p>{item?.qtdLoja || 0}</p>
            <p>{item?.perLoja || 0} %</p>
            <p>{item?.qtdMovel || 0}</p>
            <p>{item?.perMovel || 0} %</p>
            <p>{item?.revistorias || 0}</p>
            <p>{item.movelObrigatorio || 0}</p>
            <p>{item.movelNaoObrigatorio || 0}</p>
            <p>{item.total || 0}</p>
          </S.TableRow>
        ))}
      </S.Table>
    </LayoutTemplate>
  );
};
