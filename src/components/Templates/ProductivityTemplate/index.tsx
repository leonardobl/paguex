import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useProductivity } from "./useProductivity";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const ProductivityTemplate = () => {
  const { filterOpen, setFilterOpen } = useProductivity();

  return (
    <LayoutTemplate title="Relatório de Produtividade por Vistoriador">
      <S.Container>
        <S.ButtonFilter
          data-active={filterOpen}
          onClick={() => setFilterOpen((prev) => !prev)}
        >
          <img src="/assets/svg/icon-filter.svg" alt="icone filtro" />
          Filtro
        </S.ButtonFilter>
        {filterOpen && (
          <S.Filter>
            <div>
              <S.Label>Empresa</S.Label>
              <SimpleSelect />
            </div>

            <div>
              <S.Label>Loja</S.Label>
              <SimpleSelect />
            </div>

            <div>
              <Button>Buscar</Button>
            </div>
          </S.Filter>
        )}

        <h3>Leonardo Lima</h3>
      </S.Container>
    </LayoutTemplate>
  );
};
