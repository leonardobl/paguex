import { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { IReembolsoResponse } from "../../../types/pagamento";
import { IReembolsoDTO } from "../../../types/reembolso";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { TipoServicoReembolsoEnum } from "../../../enums/tipoServicoReembolso";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { IReembolsoProps } from "../../../types/gerenciamento";
import { toast } from "react-toastify";
import { reverseToIsoDate } from "../../../utils/dateTransform";

type FilterDateTypes = {
    dataIncio?: Date;
    dataFim?: Date;
    empresa?: string;
    loja?: string;
    tipoAgendamento?: TipoAtendimentoEnum | string;
    tipoServico?: TipoServicoReembolsoEnum | string;
};
  
const schema = z.object({
    dataIncio: z.date().nullable().optional(),
    dataFim: z.date().nullable().optional(),
    empresa: z.string().min(1).optional().or(z.literal("")),
    loja: z.string().optional().or(z.literal("")),
    tipoAgendamento: z.string().optional().or(z.literal("")),
    tipoServico: z.string().optional().or(z.literal("")),
});

const CidadeOptions = [
    {
      label: "Log",
      value: "Log",
    },
    {
      label: "Starcheck",
      value: "Starcheck",
    },
    {
      label: "Tokyo",
      value: "Tokyo",
    },
    {
      label: "Velox",
      value: "Velox",
    },
];

export const useDataReembolsos = () => {
    const { setIsLoad } = useContextSite();
    const [dados, setDados] = useState<IReembolsoDTO[]>([]);
    const [somatorio, setSomatorio] = useState<number>(0);

    const { register, control, handleSubmit } = useForm<FilterDateTypes>({
        defaultValues: {
            dataFim: new Date(),
            dataIncio: new Date(),
            empresa: "",
        },
        mode: "all",
        resolver: zodResolver(schema),
    });

    async function getDataReembolso(props: IReembolsoProps) {
        const result = await Gerenciamento.reembolso(props);
        return result;
    }

    function handleFilter(data: FilterDateTypes) {
        setIsLoad(true);

        const FILTER = {
            dataInicio: reverseToIsoDate(data?.dataIncio?.toLocaleDateString()),
            dataFim: reverseToIsoDate(data?.dataFim?.toLocaleDateString()),
        };

        getDataReembolso(FILTER)
        .then(({ data }) => {
            setDados(data);
            setSomatorio(data.reduce((acumulado, empresa) => acumulado + empresa.valorTotal, 0));
        })
        .catch(
            ({
                response: {
                data: { mensagem },
                },
            }) => toast.error(mensagem)
        )
        .finally(() => {
            setIsLoad(false);
        });
    }

    useEffect(() => {
        const dataInicio = reverseToIsoDate(new Date()?.toLocaleDateString());
        const dataFim = reverseToIsoDate(new Date()?.toLocaleDateString());

        setIsLoad(true);

        getDataReembolso({
            dataInicio,
            dataFim,
        })
        .then(({ data }) => {
            setDados(data);
            setSomatorio(data.reduce((acumulado, empresa) => acumulado + empresa.valorTotal, 0));
        })
        .catch(
            ({
                response: {
                    data: { mensagem },
                },
            }) => toast.error(mensagem)
        )
        .finally(() => {
            setIsLoad(false);
        });
    }, []);

    return {
        handleFilter,
        register,
        Controller,
        control,
        handleSubmit,
        CidadeOptions,
        dados,
        somatorio,
    };
}