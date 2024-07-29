import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useProductivity } from "./useProductivity";
import { FormFilterProductivitySurveyor } from "../../Molecules/FormProductivitySurveyor";
import { Controller } from "react-hook-form";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";
import { Button } from "../../Atoms/Button";

export const ProductivitySurveyorTemplate = () => {
  const { 
    handleFilter,
    register,
    Controller,
    control,
    handleSubmit,
    CidadeOptions,
    dados,
  } = useProductivity();

  return (
    <LayoutTemplate title="Relatório de Produtividade por Vistoriador">
      <S.Container>
      <S.Form onSubmit={handleSubmit(handleFilter)}>
        <div>
          <S.Label>Data Inicial</S.Label>
          <Controller
            name="dataIncio"
            control={control}
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
            name="dataFim"
            control={control}
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
          <S.Label>Loja</S.Label>
          <Controller
            name="loja"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                value={value}
                onChange={(e: ISelectOptions) => {
                  onChange(e?.value);
                }}
              />
            )}
          />
        </div>

        <div>
          <Button>Filtrar</Button>
        </div>
      </S.Form>

        <S.Table>
          <S.TableHead>
            <tr>
              <td className="fixeSize" rowSpan={3}>
                Nome do Vistoriador
              </td>
              <td className="fixeSize" rowSpan={3}>
                Empresa
              </td>
              <td className="fixeSize" rowSpan={3}>
                Loja
              </td>
              <td colSpan={4}>Atendimento Loja</td>
              <td colSpan={4}>Delivery</td>
            </tr>

            <tr>
              <td className="textSmall" colSpan={2}>
                Vistoria de Transferência
              </td>
              <td className="textSmall" colSpan={2}>
                Primeiro Emplacamento
              </td>

              <td className="textSmall" colSpan={2}>
                Vistoria de Transferência
              </td>
              <td className="textSmall" colSpan={2}>
                Primeiro Emplacamento
              </td>
            </tr>

            <tr>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>

              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            {dados?.map((empresa) => (
              empresa?.vistoriadores?.map((vistoriador) => (
                <tr>
                  <td>{vistoriador?.nome}</td>
                  <td>{empresa?.empresa}</td>
                  <td>{vistoriador?.loja}</td>
                  <td>{vistoriador?.qtdAgendamentoTransferencia}</td>
                  <td>{vistoriador?.tempoAgendamentoTransferencia ? vistoriador?.tempoAgendamentoTransferencia : 'n/a'}</td>
                  <td>{vistoriador?.qtdAgendamentoEmplacamento}</td>
                  <td>{vistoriador?.tempoAgendamentoEmplacamento ? vistoriador?.tempoAgendamentoEmplacamento : 'n/a'}</td>
                  <td>{vistoriador?.qtdAgendamentoTransferenciaDelivery}</td>
                  <td>{vistoriador?.tempoAgendamentoTransferenciaDelivery ? vistoriador?.tempoAgendamentoTransferenciaDelivery : 'n/a'}</td>
                  <td>{vistoriador?.qtdAgendamentoEmplacamentoDelivery}</td>
                  <td>{vistoriador?.tempoAgendamentoEmplacamentoDelivery ? vistoriador?.tempoAgendamentoEmplacamentoDelivery : 'n/a'}</td>
                </tr>
              ))
            ))}
          </S.TableBody>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
