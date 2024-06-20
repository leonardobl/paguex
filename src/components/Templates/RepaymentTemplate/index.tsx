import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormFilterRepayment } from "../../Molecules/FormFilterRepayment";

export const RepaymentTemplate = () => {
  return (
    <LayoutTemplate title="Dashboard de Reembolsos">
      <S.Container>
        <FormFilterRepayment submitForm={(e) => console.log(e)} />

        <S.Table>
          <S.TableHead>
            <tr>
              <td>Empresa</td>
              <td>Loja</td>
              <td>Qtd. Total</td>
              <td>Valor Total</td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            <tr>
              <td>Starcheck</td>
              <td>São Luís</td>
              <td>80</td>
              <td>R$00,00</td>
            </tr>
            <tr>
              <td>Starcheck</td>
              <td>São Luís</td>
              <td>80</td>
              <td>R$00,00</td>
            </tr>
            <tr>
              <td>Starcheck</td>
              <td>São Luís</td>
              <td>80</td>
              <td>R$00,00</td>
            </tr>
            <tr>
              <td>Starcheck</td>
              <td>São Luís</td>
              <td>80</td>
              <td>R$00,00</td>
            </tr>
          </S.TableBody>
          <S.TableFooter>
            <tr>
              <td colSpan={3}></td>
              <td>Geral: R$00,00 </td>
            </tr>
          </S.TableFooter>
        </S.Table>
      </S.Container>
    </LayoutTemplate>
  );
};
