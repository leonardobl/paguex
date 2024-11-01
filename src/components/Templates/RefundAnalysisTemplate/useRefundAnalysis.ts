import { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import {
  IReembolsoAnaliticoDTO,
  IReembolsoAnaliticoGetProps,
} from "../../../types/agendamento";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { IPagination } from "../../../types/pagination";
import { useMediaQuery } from "react-responsive";

export const useRefundAnalysis = () => {
  const { setIsLoad } = useContextSite();
  const [data, setData] = useState([] as IReembolsoAnaliticoDTO[]);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const [filters, setFilters] = useState<IReembolsoAnaliticoGetProps>(
    {} as IReembolsoAnaliticoGetProps
  );

  function getReembolsos(props?: IReembolsoAnaliticoGetProps) {
    setFilters(props);
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    setIsLoad(true);
    Gerenciamento.reembolsoAnalitico({
      dataInicio: date,
      dataFim: date,
      ...props,
    })
      .then(({ data }) => {
        setData(data.content);
        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
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
    getReembolsos(filters);
  }, [numberPage]);

  return { data, getReembolsos, isMobile, setNumberPage, pagination };
};
