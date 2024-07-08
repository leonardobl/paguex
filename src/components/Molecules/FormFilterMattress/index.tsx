import React, { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { IColchaoAgendamentoProps } from "../../../types/gerenciamento";
import { useFormFilterMattress } from "./useFormFilterMattress";
import { ISelectOptions } from "../../../types/inputs";

interface IFormFilterMattressProps extends ComponentProps<"form"> {
  submitForm: (data: IColchaoAgendamentoProps) => void;
}

export const FormFilterMattress = ({
  submitForm,
  ...rest
}: IFormFilterMattressProps) => {
  const { Controller, control, handleSubmit } = useFormFilterMattress();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <S.Label>Empresa</S.Label>

        <Controller
          control={control}
          name="empresa"
          render={({ field: { value, onChange } }) => (
            <SimpleSelect
              value={value}
              placeholder=""
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
              placeholder=""
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <S.Label>Tipo de Atendimento</S.Label>
        <Controller
          name="tipoAtendimento"
          control={control}
          render={({ field: { value, onChange } }) => (
            <SimpleSelect
              value={value}
              placeholder=""
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <S.Label>Tipo de Serviço</S.Label>
        <Controller
          control={control}
          name="tipoServico"
          render={({ field: { value, onChange } }) => (
            <SimpleSelect
              value={value}
              placeholder=""
              onChange={(e: ISelectOptions) => onChange(e?.value)}
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
