import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Autenticacao } from "../../../services/Autenticacao";
import { maskCnpj, maskCpf, removeDigitos } from "../../../utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../types/autenticacao";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  cpfCNPJ: z.string({ message: "Campo obrigatorio" }).min(14, "CPF invalido"),
  senha: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

export const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoad, setTokenContext } = useContextSite();
  const [token, setToken] = useSessionStorage("@token");
  const [sessionUsuario, setSessionUsuario] = useSessionStorage("Usuario");

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IAutenticacaoForm>({
    defaultValues: {
      cpfCNPJ: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (token) {
      navigate("/geral");
    }
  }, []);

  useEffect(() => {
    if (watch("cpfCNPJ")?.length > 14) {
      setValue("cpfCNPJ", maskCnpj(watch("cpfCNPJ")));
      return;
    }
    setValue("cpfCNPJ", maskCpf(watch("cpfCNPJ")));
  }, [watch("cpfCNPJ")]);

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

  return { navigate, register, onSubmit, handleSubmit, errors };
};
