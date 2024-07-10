import { z } from "zod";
import { IProducaoTipoServicoDTO, IProducaoTipoServicoProps } from "../../../types/gerenciamento";
import { useContextSite } from "../../../context/Context";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { toast } from "react-toastify";

type FilterDateTypes = {
    dataIncio?: Date;
    dataFim?: Date;
    empresa?: string;
    loja?: string;
};
  
const schema = z.object({
    dataIncio: z.date().nullable().optional(),
    dataFim: z.date().nullable().optional(),
    empresa: z.string().min(1).optional().or(z.literal("")),
    loja: z.string().optional().or(z.literal("")),
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

export const useDataProdutivityService = () => {
    const { setIsLoad } = useContextSite();
    const [dados, setDados] = useState<IProducaoTipoServicoDTO[]>([]);

    const { register, control, handleSubmit } = useForm<FilterDateTypes>({
        defaultValues: {
            dataFim: new Date(),
            dataIncio: new Date(),
            empresa: "",
        },
        mode: "all",
        resolver: zodResolver(schema),
    });

    async function getDataProdutividade(props: IProducaoTipoServicoProps) {
        const result = await Gerenciamento.producaoTipoServico(props);
        return result;
    }

    function handleFilter(data: FilterDateTypes) {
        setIsLoad(true);

        const FILTER = {
            dataInicio: reverseToIsoDate(data?.dataIncio?.toLocaleDateString()),
            dataFim: reverseToIsoDate(data?.dataFim?.toLocaleDateString()),
        };

        getDataProdutividade(FILTER)
        .then(({ data }) => {
            setDados(data);
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

        getDataProdutividade({
            dataInicio,
            dataFim,
        })
        .then(({ data }) => {
            setDados(data);
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
    };
}