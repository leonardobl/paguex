import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useProductivity } from "./useProductivity";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const ProductivitySurveyorTemplate = () => {
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

        <S.Table>
          <S.TableHead>
            <tr>
              <td className="fixeSize" rowSpan={3}>
                Nome do Vistoriador
              </td>
              <td className="fixeSize" rowSpan={3}>
                Empresa
              </td>
              <td className="fixeSize" rowSpan={3}>
                Loja
              </td>
              <td colSpan={4}>Atendimento Loja</td>
              <td colSpan={4}>Delivery</td>
            </tr>

            <tr>
              <td className="textSmall" colSpan={2}>
                Vistoria de Transferência
              </td>
              <td className="textSmall" colSpan={2}>
                Primeiro Emplacamento
              </td>

              <td className="textSmall" colSpan={2}>
                Vistoria de Transferência
              </td>
              <td className="textSmall" colSpan={2}>
                Primeiro Emplacamento
              </td>
            </tr>

            <tr>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>

              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Qtd. de vistorias
              </td>
              <td className="textSmall fixeSize bg-orange">
                Tempo médio de vistorias
              </td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
          </S.TableBody>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};