import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useFormFilterProductivityService } from "./useFormFilterProductivityService";
import { IGerenciamentoProducaoServicoProps } from "../../../types/gerenciamento";

interface IFormFilterProductivityServicePropss extends ComponentProps<"form"> {
  submitForm: (data: IGerenciamentoProducaoServicoProps) => void;
}

export const FormFilterProductivityService = ({
  submitForm,
  ...rest
}: IFormFilterProductivityServicePropss) => {
  const { control, handleSubmit, Controller } =
    useFormFilterProductivityService();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <S.Label>Data Inicial</S.Label>
        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange } }) => (
            <InputDate
              showIcon
              onChange={() => ""}
              placeholderText="___/___/___"
            />
          )}
        />
      </div>

      <div>
        <S.Label>Data Final</S.Label>
        <Controller
          control={control}
          name="dataFim"
          render={({ field: { onChange } }) => (
            <InputDate
              showIcon
              onChange={() => ""}
              placeholderText="___/___/___"
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
            <SimpleSelect placeholder="" />
          )}
        />
      </div>

      <div>
        <S.Label>Loja</S.Label>
        <Controller
          control={control}
          name="loja"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect placeholder="" />
          )}
        />
      </div>

      <div>
        <Button>Filtrar</Button>
      </div>
    </S.Form>
  );
};
