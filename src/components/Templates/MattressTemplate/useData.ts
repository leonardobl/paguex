import { useEffect, useState } from "react"
import { useContextSite } from "../../../context/Context";
import { Gerenciamento } from "../../../services/Gerenciamento";
import { toast } from "react-toastify";
import { IColchaoAgendamentoDTO } from "../../../types/colchaoAgendamento";

export const useDataColchaoAgendamentos = () => {
    const { setIsLoad } = useContextSite();
    const [dados, setDados] = useState<IColchaoAgendamentoDTO[]>([]);

    useEffect(() => {
        setIsLoad(true);

        Gerenciamento.colchaoDeAgendamentos()
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
        dados,
    };
}