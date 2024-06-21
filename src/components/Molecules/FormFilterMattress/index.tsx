import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const FormFilterMattress = () => {
  return (
    <S.Form>
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
    </S.Form>
  );
};
