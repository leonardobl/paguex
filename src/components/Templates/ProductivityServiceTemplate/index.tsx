import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { FormFilterProductivityService } from "../../Molecules/FormFilterProductivityService";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";
import { Button } from "../../Atoms/Button";
import { useDataProdutivityService } from "./useData";

export const ProductivityServiceTemplate = () => {

  const {
    handleFilter,
    register,
    Controller,
    control,
    handleSubmit,
    CidadeOptions,
    dados,
  } = useDataProdutivityService();

  return (
    <LayoutTemplate title="Relatório de Produção por Tipo de Serviço">
      <S.Form onSubmit={handleSubmit(handleFilter)}>
        <div>
          <S.Label>Data Inicial</S.Label>
          <Controller
            name="dataIncio"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputDate
                required
                showIcon
                selected={value}
                placeholderText="___/___/___"
                onChange={onChange}
              />
            )}
          />
        </div>
        <div>
          <S.Label>Data Final</S.Label>
          <Controller
            name="dataFim"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputDate
                required
                showIcon
                maxDate={new Date()}
                selected={value}
                placeholderText="___/___/___"
                onChange={onChange}
              />
            )}
          />
        </div>

        <div>
        <S.Label>Empresa</S.Label>
          <Controller
            control={control}
            name="empresa"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                options={CidadeOptions}
                isClearable
                value={CidadeOptions.find((i) => i.value === value) || null}
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
                onChange={(e: ISelectOptions) => {
                  onChange(e?.value);
                }}
              />
            )}
          />
        </div>

        <div>
          <Button>Filtrar</Button>
        </div>
      </S.Form>

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
          {dados?.map((empresa) => (
            <tr>
              <td>{empresa?.empresa}</td>
              <td>{empresa?.loja}</td>
              <td>{empresa?.qtdTransferenciaLoja}</td>
              <td>{empresa?.qtdTransferenciaMovel}</td>
              <td>{empresa?.qtdTransferenciaTotal}</td>
              <td>{empresa?.qtdPrimeiroEmplacamentoLoja}</td>
              <td>{empresa?.qtdPrimeiroEmplacamentoMovel}</td>
              <td>{empresa?.qtdPrimeiroEmplacamentoTotal}</td>
            </tr>
          ))}
        </S.TableBody>
      </S.Table>
    </LayoutTemplate>
  );
};
