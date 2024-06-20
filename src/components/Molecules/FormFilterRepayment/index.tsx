import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useFormFilterRepayment } from "./useFormFilterRepayment";
import { IReembolsoProps } from "../../../types/gerenciamento";
import { ISelectOptions } from "../../../types/inputs";

interface IFormFilterRepaymentProps extends ComponentProps<"form"> {
  submitForm: (data: IReembolsoProps) => void;
}

export const FormFilterRepayment = ({
  submitForm,
  ...rest
}: IFormFilterRepaymentProps) => {
  const {
    Controller,
    control,
    handleSubmit,
    dataFim,
    dataInicio,
    setDataFim,
    setDataInicio,
  } = useFormFilterRepayment();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <S.Label>Data Inicial</S.Label>
        <Controller
          name="dataInicio"
          control={control}
          render={({ field: { onChange } }) => (
            <InputDate
              isClearable
              placeholderText="___/___/___"
              showIcon
              selected={dataInicio}
              onChange={(e) => {
                setDataInicio(e);
                const value = e ? e?.toLocaleDateString() : "";
                onChange(value);
              }}
            />
          )}
        />
      </div>
      <div>
        <S.Label>Data Final</S.Label>
        <Controller
          name="dataFim"
          control={control}
          render={({ field: { onChange } }) => (
            <InputDate
              isClearable
              placeholderText="___/___/___"
              showIcon
              selected={dataFim}
              onChange={(e) => {
                setDataFim(e);
                const value = e ? e?.toLocaleDateString() : "";
                onChange(value);
              }}
            />
          )}
        />
      </div>

      <div>
        <S.Label>Empresa</S.Label>
        <Controller
          name="empresa"
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
  );
};
