import { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { toast } from "react-toastify";

export const useDataTendencia = () => {
    const { setIsLoad } = useContextSite();
    const [dadosQuantidades, setDadosQuantidades] = useState([]);
    const [dadosValores, setDadosValores] = useState([]);
    const [axisLinear, setAxisLinear] = useState([]);

    useEffect(() => {
        setIsLoad(true);

        Gerenciamento.tendencia()
        .then(({ data }) => {

            const dates = [];
            const seriesQuantidades = data.map((empresa) => {
                empresa.tendencias.forEach((producao) => {
                    if (!dates.includes(producao.data))
                        dates.push(producao.data);
                });
                return {
                    label: empresa.empresa,
                    data: empresa.tendencias.map((producao) => producao.qtdTotal),
                };
            });

            const seriesValores = data.map((empresa) => {
                return {
                    label: empresa.empresa,
                    data: empresa.tendencias.map((producao) => producao.valorTotal / 100),
                };
            });

            setAxisLinear(dates.map(reverseToBrDate));
            setDadosQuantidades(seriesQuantidades);
            setDadosValores(seriesValores);

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
        dadosQuantidades,
        dadosValores,
        axisLinear,
    };
}