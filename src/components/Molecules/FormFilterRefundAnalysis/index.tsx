import { ComponentProps } from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useFormFilterRefundAnalysis } from "./useFormFilterRefundAnalysis";
import dayjs from "dayjs";
import { ISelectOptions } from "../../../types/inputs";
import { IReembolsoAnaliticoGetProps } from "../../../types/agendamento";

interface IFormFilterRefundAnalysisProps extends ComponentProps<"form"> {
  submitForm: (data: IReembolsoAnaliticoGetProps) => void;
}

export const FormFilterRefundAnalysis = ({
  submitForm,
  ...rest
}: IFormFilterRefundAnalysisProps) => {
  const {
    TipoReembolsoOptions,
    TipoAgendamentoOptions,
    control,
    handleSubmit,
    Controller,
    lojasOptions,
    empresasOptions,
  } = useFormFilterRefundAnalysis();

  return (
    <S.MyFormAnalysis {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <S.Label>Data Inicial</S.Label>

        <Controller
          name="dataInicio"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputDate
              placeholderText="___/___/___"
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) =>
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("")
              }
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
              placeholderText="___/___/___"
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) =>
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("")
              }
            />
          )}
        />
      </div>

      <div>
        <S.Label>Empresa</S.Label>
        <Controller
          control={control}
          name="empresa"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={empresasOptions}
              isClearable
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              value={empresasOptions.find((e) => e.value === value) || null}
            />
          )}
        />
      </div>

      <div>
        <S.Label>Loja</S.Label>
        <Controller
          control={control}
          name="loja"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={lojasOptions}
              isClearable
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              value={lojasOptions.find((e) => e.value === value) || null}
            />
          )}
        />
      </div>

      <div>
        <S.Label>Tipo de Atendimento</S.Label>
        <Controller
          control={control}
          name="tipoAgendamento"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={TipoAgendamentoOptions}
              isClearable
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              value={
                TipoAgendamentoOptions.find((e) => e.value === value) || null
              }
            />
          )}
        />
      </div>

      <div>
        <S.Label>Tipo de Serviço</S.Label>
        <Controller
          control={control}
          name="tipoServico"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={TipoReembolsoOptions}
              isClearable
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              value={
                TipoReembolsoOptions.find((e) => e.value === value) || null
              }
            />
          )}
        />
      </div>

      <div>
        <Button>Filtrar</Button>
      </div>
    </S.MyFormAnalysis>
  );
};
