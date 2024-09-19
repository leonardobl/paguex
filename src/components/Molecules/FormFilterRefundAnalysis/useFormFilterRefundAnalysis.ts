import { useForm, Controller } from "react-hook-form";
import { IReembolsoAnaliticoGetProps } from "../../../types/agendamento";
import dayjs from "dayjs";
import { TipoServicoReembolsoEnum } from "../../../enums/tipoServicoReembolso";
import { removeUnderscore } from "../../../utils/removeUnderscore";
import { TipoAgendamentoEnum } from "../../../enums/tipoAgendameto";
import { useCallback, useEffect, useState } from "react";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";

const TipoReembolsoOptions = Object.values(TipoServicoReembolsoEnum).map(
  (i) => ({ value: i, label: removeUnderscore(i) })
);

const TipoAgendamentoOptions = Object.values(TipoAgendamentoEnum).map((i) => ({
  value: i,
  label: i,
}));

export const useFormFilterRefundAnalysis = () => {
  const [lojasOptions, setLojaOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const [empresasOptions, setEmpresasOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const { control, handleSubmit } = useForm<IReembolsoAnaliticoGetProps>({
    defaultValues: {
      dataFim: dayjs(new Date()).format("YYYY-MM-DD"),
      dataInicio: dayjs(new Date()).format("YYYY-MM-DD"),
      empresa: "",
      loja: "",
      tipoAgendamento: "" as TipoAgendamentoEnum,
      tipoServico: "" as TipoServicoReembolsoEnum,
    },
  });

  const getLojas = useCallback(() => {
    Gerenciamento.listarLojas()
      .then(({ data }) => {
        const options = data.map((i) => ({ value: i, label: i }));
        setLojaOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      );
  }, []);

  const getEmpresas = useCallback(() => {
    Gerenciamento.listarEmpresas()
      .then(({ data }) => {
        const options = data.map((i) => ({ value: i, label: i }));
        setEmpresasOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      );
  }, []);

  useEffect(() => {
    getLojas();
    getEmpresas();
  }, []);

  return {
    TipoReembolsoOptions,
    TipoAgendamentoOptions,
    control,
    handleSubmit,
    Controller,
    lojasOptions,
    empresasOptions,
  };
};
