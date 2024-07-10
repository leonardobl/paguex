import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useDataReembolsos } from "./useData";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";
import { Button } from "../../Atoms/Button";
import { maskMoney } from "../../../utils/masks";

export const RepaymentTemplate = () => {

  const {
    handleFilter,
    register,
    Controller,
    control,
    handleSubmit,
    CidadeOptions,
    dados,
    somatorio,
  } = useDataReembolsos();

  return (
    <LayoutTemplate title="Dashboard de Reembolsos">
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
          <S.Label>Tipo de Atendimento</S.Label>
          <Controller
            name="tipoAgendamento"
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
          <S.Label>Tipo de Serviço</S.Label>
          <Controller
            name="tipoServico"
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
              <td>Empresa</td>
              <td>Loja</td>
              <td>Qtd. Total</td>
              <td>Valor Total</td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            {dados?.map((empresa) => (
              <tr>
                <td>{empresa?.empresa}</td>
                <td>{empresa?.loja}</td>
                <td>{empresa?.qtdTotal}</td>
                <td>{maskMoney(empresa?.valorTotal/100) || "R$ 0,00"}</td>
              </tr>
            ))}
          </S.TableBody>
          <S.TableFooter>
            <tr>
              <td colSpan={3}></td>
              <td>Geral: {maskMoney(somatorio/100) || "R$ 0,00"}</td>
            </tr>
          </S.TableFooter>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
