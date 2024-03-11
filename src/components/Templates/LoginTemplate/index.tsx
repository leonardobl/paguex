import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useLogin } from "./useLogin";
import { LayoutTemplateNoUser } from "../LayoutTemplateNoUser";

export const LoginTemplate = () => {
  const { navigate, handleSubmit, form, setForm, handleCpf } = useLogin();

  return (
    <LayoutTemplateNoUser>
      <S.Container>
        <Title>Login</Title>
        <S.Form onSubmit={handleSubmit}>
          <div>
            <S.Label>CPF</S.Label>
            <Input
              required
              maxLength={18}
              value={form?.cpfCNPJ}
              onChange={(e) => {
                handleCpf(e.target.value);
              }}
            />
          </div>
          <div>
            <S.Label>Senha</S.Label>
            <Input
              required
              type="password"
              value={form.senha}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, senha: e.target.value }))
              }
            />
            <S.ForgotButton onClick={() => navigate("/esqueci-senha")}>
              Esqueceu sua senha?
            </S.ForgotButton>
          </div>
          <div>
            <Button id="submit">Entrar</Button>
          </div>
        </S.Form>
      </S.Container>
    </LayoutTemplateNoUser>
  );
};
