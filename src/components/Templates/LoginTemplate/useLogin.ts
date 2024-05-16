import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Autenticacao } from "../../../services/Autenticacao";
import { removeDigitos } from "../../../utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoad, setTokenContext } = useContextSite();
  const [token, setToken] = useSessionStorage("@token");
  const [sessionUsuario, setSessionUsuario] = useSessionStorage("Usuario");

  useEffect(() => {
    if (token) {
      navigate("/relatorio-geral");
    }
  }, []);

  async function onSubmit(data: IAutenticacaoForm) {
    const PAYLOAD: IAutenticacaoForm = {
      ...data,
      cpfCNPJ: removeDigitos(data.cpfCNPJ),
    };

    setIsLoad(true);

    await Autenticacao.post(PAYLOAD)
      .then(({ data }) => {
        setToken(data.token);
        setTokenContext(data.token);
        return data.token;
      })
      .then((token) => {
        const decoded = jwtDecode<IDecodedToken>(token);

        setSessionUsuario({
          ...decoded,
        });
        toast.success("Login efetuado com sucesso!", { autoClose: 1500 });
        setTimeout(() => {
          navigate("/relatorio-geral");
        }, 2000);
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

  return { onSubmit };
};
