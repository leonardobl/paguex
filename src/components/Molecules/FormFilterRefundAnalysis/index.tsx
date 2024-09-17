import { ComponentProps, SyntheticEvent } from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

interface IFormFilterRefundAnalysisProps extends ComponentProps<"form"> {
  submitForm: () => void;
}

export const FormFilterRefundAnalysis = ({
  submitForm,
  ...rest
}: IFormFilterRefundAnalysisProps) => {
  return (
    <S.MyFormAnalysis {...rest}>
      <div>
        <S.Label>Data Inicial</S.Label>
        <InputDate placeholderText="___/___/___" onChange={() => ""} />
      </div>

      <div>
        <S.Label>Data Final</S.Label>
        <InputDate placeholderText="___/___/___" onChange={() => ""} />
      </div>

      <div>
        <S.Label>Empresa</S.Label>
        <SimpleSelect />
      </div>

      <div>
        <S.Label>Loja</S.Label>
        <SimpleSelect />
      </div>

      <div>
        <S.Label>Tipo de Atendimento</S.Label>
        <SimpleSelect />
      </div>

      <div>
        <S.Label>Tipo de Serviço</S.Label>
        <SimpleSelect />
      </div>

      <div>
        <Button>Filtrar</Button>
      </div>
    </S.MyFormAnalysis>
  );
};
