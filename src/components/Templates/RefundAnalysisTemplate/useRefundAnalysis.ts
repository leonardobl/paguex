import { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import {
  IReembolsoAnaliticoDTO,
  IReembolsoAnaliticoGetProps,
} from "../../../types/agendamento";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { toast } from "react-toastify";
import dayjs from "dayjs";

export const useRefundAnalysis = () => {
  const { setIsLoad } = useContextSite();
  const [data, setData] = useState([] as IReembolsoAnaliticoDTO[]);

  function getReembolsos(props: IReembolsoAnaliticoGetProps) {
    setIsLoad(true);
    Gerenciamento.reembolsoAnalitico(props)
      .then(({ data }) => {
        setData(data.content);
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
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getReembolsos({ dataInicio: date, dataFim: date });
  }, []);

  return { data, getReembolsos };
};
