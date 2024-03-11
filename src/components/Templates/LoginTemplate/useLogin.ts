import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Autenticacao } from "../../../services/Autenticacao";
import { maskCnpj, maskCpf, removeDigitos } from "../../../utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<IAutenticacaoForm>({} as IAutenticacaoForm);
  const { setIsLoad, setTokenContext } = useContextSite();

  const [token, setToken] = useSessionStorage("@token");

  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  function handleCpf(e: string) {
    let newValue = "";

    if (e.length > 14) {
      newValue = maskCnpj(e) as string;
      setForm((prev) => ({ ...prev, cpfCNPJ: newValue }));

      return;
    }
    newValue = maskCpf(e) as string;
    setForm((prev) => ({ ...prev, cpfCNPJ: newValue }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    const PAYLOAD: IAutenticacaoForm = {
      cpfCNPJ: removeDigitos(form.cpfCNPJ),
      senha: form.senha,
    };

    await Autenticacao.post(PAYLOAD)
      .then(({ data }) => {
        setToken(data.token);
        setTokenContext(data.token);
        return data.token;
      })
      .then((token) => {
        const decoded = jwtDecode<IDecodedToken>(token);

        setAgendamentoSession({
          ...agendamentoSession,
          uuidUsuario: decoded.uuid,
          usuarioCpfCnpj: decoded.sub,
          roles: decoded.perfis,
        });

        navigate("/");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
          setTokenContext("");
          sessionStorage.removeItem("@token");
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  return { navigate, handleSubmit, form, setForm, handleCpf };
};
