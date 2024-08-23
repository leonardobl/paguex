import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { useHome } from "./useHome";
import { maskMoney } from "../../../utils/masks";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";

export const GeneralTemplate = () => {
  const {
    control,
    handleSubmit,
    Controller,
    handleFilter,
    dataGeral,
    axisLinear,
    dataLinear,
    CidadeOptions,
    GraphColors,
  } = useHome();

  return (
    <LayoutTemplate title="Relatórios de Produção Geral">
      <S.FormDateFilter onSubmit={handleSubmit(handleFilter)}>
        <div>
          <S.Label>Data Inicial</S.Label>
          <Controller
            control={control}
            name="dataIncio"
            render={({ field: { onChange, value } }) => (
              <InputDate
                required
                showIcon
                selected={value}
                placeholderText="___/___/___"
                onChange={onChange}
              />
            )}
          />
        </div>
        <div>
          <S.Label>Data Final</S.Label>
          <Controller
            control={control}
            name="dataFim"
            render={({ field: { onChange, value } }) => (
              <InputDate
                required
                showIcon
                maxDate={new Date()}
                selected={value}
                placeholderText="___/___/___"
                onChange={onChange}
              />
            )}
          />
        </div>
        <div>
          <S.Label>Empresa</S.Label>
          <Controller
            control={control}
            name="empresa"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                options={CidadeOptions}
                isClearable
                value={CidadeOptions.find((i) => i.value === value) || null}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
              />
            )}
          />
        </div>
        <div>
          <S.Label></S.Label>
          <Button>Filtrar</Button>
        </div>
      </S.FormDateFilter>
      <S.WrapperListCards>
        <S.ListCards>
          <S.Card>
            <p>Ticket Médio</p>
            <span>{maskMoney(dataGeral?.ticketMedio / 100) || "R$ 0,00"}</span>
          </S.Card>
          <S.Card>
            <p>Revistorias</p>
            <span>{dataGeral?.revistorias | 0}</span>
          </S.Card>
          <S.Card>
            <p>Delivery Veículos Leves</p>
            <span>{dataGeral?.movelNaoObrigatorio | 0}</span>
          </S.Card>
          <S.Card>
            <p>Delivery Veículos Pesados</p>
            <span>{dataGeral?.movelObrigatorio | 0}</span>
          </S.Card>
          <S.Card>
            <p>Qtd. Primeiro Emplacamento</p>
            <span>{dataGeral?.qtdPrimeiroEmplacamento | 0}</span>
          </S.Card>
          <S.Card>
            <p>Qtd. Transferência</p>
            <span>{dataGeral?.qtdTransferencia | 0}</span>
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
      </S.WrapperListCards>
      <S.FlexWrapperGraficos>
        <S.CardVistoria>
          <S.TitleCard>Vistorias (%)</S.TitleCard>
          <BarChart
            margin={{
              bottom: 70,
            }}
            height={340}
            xAxis={[{ scaleType: "band", data: ["Lojas", "Deliverys"] }]}
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
            series={
              dataGeral?.empresas?.map((item) => ({
                data: [item.qtdLoja, item.qtdDelivery],
                label: item?.empresa,
                color: GraphColors[item?.empresa],
                valueFormatter: (value) => `${value} %`,
              })) || []
            }
            skipAnimation={true}
          />
        </S.CardVistoria>
        <S.CardProducao>
          <S.TitleCard>PRODUÇÃO DIÁRIA TOTAL DE VISTORIAS</S.TitleCard>

          <LineChart
            height={340}
            margin={{
              bottom: 70,
            }}
            series={dataLinear || []}
            xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
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
          <h4>Delivery Veíc. leves</h4>
          <h4>Delivery Veíc. Pesados</h4>

          {/* <h4>Revistorias </h4> */}
          {/* <h4>Móvel Obrigatório</h4> */}
          {/* <h4>Móvel Não Obrigatório</h4> */}
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
            {/* <p>{item?.revistorias || 0}</p> */}
            <p>{item.movelNaoObrigatorio || 0}</p>
            <p>{item.movelObrigatorio || 0}</p>
            <p>{item.total || 0}</p>
          </S.TableRow>
        ))}
      </S.Table>
    </LayoutTemplate>
  );
};
