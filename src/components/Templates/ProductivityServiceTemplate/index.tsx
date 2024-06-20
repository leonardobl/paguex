import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormFilterProductivityService } from "../../Molecules/FormFilterProductivityService";

export const ProductivityServiceTemplate = () => {
  return (
    <LayoutTemplate title="Relatório de Produção por Tipo de Serviço">
      <FormFilterProductivityService submitForm={(data) => console.log(data)} />

      <S.Table>
        <S.TableHead>
          <tr>
            <td className="fixeSize" rowSpan={3}>
              Empresa
            </td>
            <td className="fixeSize" rowSpan={3}>
              Loja
            </td>
            <td colSpan={3}>Vistoria de Transferência</td>
            <td colSpan={3}>Primeiro Emplacamento</td>
          </tr>

          <tr>
            <td className="textSmall fixeSize bg-orange">Qtd. Loja</td>
            <td className="textSmall fixeSize bg-orange">Qtd. Móvel</td>
            <td className="textSmall fixeSize bg-orange">Total</td>

            <td className="textSmall fixeSize bg-orange">Qtd. Loja</td>
            <td className="textSmall fixeSize bg-orange">Qtd. Móvel</td>
            <td className="textSmall fixeSize bg-orange">Total</td>
          </tr>
        </S.TableHead>
        <S.TableBody>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>

          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>

          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>

          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </S.TableBody>
      </S.Table>
    </LayoutTemplate>
  );
};
