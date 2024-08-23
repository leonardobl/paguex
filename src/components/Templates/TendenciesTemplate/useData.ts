import { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { toast } from "react-toastify";
import { GraphColors } from "../../../utils/graphCorlors";
import { ITendenciaDesempenhoDTO } from "../../../types/tendencia";

export const useDataTendencia = () => {
  const { setIsLoad } = useContextSite();
  const [dadosQuantidades, setDadosQuantidades] = useState([]);
  const [dadosValores, setDadosValores] = useState([]);
  const [axisLinear, setAxisLinear] = useState([]);
  const [desempenhos, setDesempenhos] = useState<ITendenciaDesempenhoDTO[]>([]);

  useEffect(() => {
    setIsLoad(true);

    Gerenciamento.tendencia()
      .then(({ data }) => {
        const dates = [];
        const seriesQuantidades = data.map((empresa) => {
          empresa.tendencias.forEach((producao) => {
            if (!dates.includes(producao.data)) dates.push(producao.data);
          });
          return {
            label: empresa.empresa,
            data: empresa.tendencias.map((producao) => producao.qtdTotal),
            color: GraphColors[empresa.empresa],
          };
        });

        const seriesValores = data.map((empresa) => {
          return {
            label: empresa.empresa,
            data: empresa.tendencias.map(
              (producao) => producao.valorTotal / 100
            ),
            color: GraphColors[empresa.empresa],
            valueFormatter: (value) => `R$ ${value}`,
          };
        });

        const seriesDesempenhoEmpresas = data.map((empresa) => {
          return {
            ...empresa,
            empresa: empresa?.empresa,
            meta: empresa?.meta ? empresa?.meta : 0,
            qtdTotal: empresa?.qtdTotal,
            valorTotal: empresa?.valorTotal,
            qtdMedia: empresa?.qtdMedia,
            valorMedio: empresa?.valorMedio,
            qtdMediaProjecao: empresa?.qtdMediaProjecao,
            valorMedioProjecao: empresa?.valorMedioProjecao,
            qtdMediaNecessaria: empresa?.qtdMediaNecessaria,
            valorMedioNecessario: empresa?.valorMedioNecessario,
          };
        });

        setAxisLinear(dates.map(reverseToBrDate));
        setDadosQuantidades(seriesQuantidades);
        setDadosValores(seriesValores);
        setDesempenhos(seriesDesempenhoEmpresas);
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
    desempenhos,
  };
};
