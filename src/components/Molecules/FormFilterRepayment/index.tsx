import React from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

export const FormFilterRepayment = () => {
  return (
    <S.Form>
      <div>
        <S.Label>Data Inicial</S.Label>
        <InputDate label="___/___/___" showIcon onChange={() => ""} />
      </div>
      <div>
        <S.Label>Data Final</S.Label>
        <InputDate label="___/___/___" showIcon onChange={() => ""} />
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
    </S.Form>
  );
};
