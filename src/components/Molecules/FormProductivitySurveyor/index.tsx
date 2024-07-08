import React, { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useFormFilterProductivitySurveyor } from "./useFormFilterPruductivitySurveyor";
import { ISelectOptions } from "../../../types/inputs";
import { IProductivitySurveyorProps } from "../../../types/gerenciamento";

interface IFormFilterPruductivitySurveyorProps extends ComponentProps<"form"> {
  submitForm: (data: IProductivitySurveyorProps) => void;
}

export const FormFilterProductivitySurveyor = ({
  submitForm,
  ...rest
}: IFormFilterPruductivitySurveyorProps) => {
  const { Controller, control, handleSubmit } =
    useFormFilterProductivitySurveyor();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <S.Label>Empresa</S.Label>

        <Controller
          control={control}
          name="empresa"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              isClearable
              value={value}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
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
              isClearable
              value={value}
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
