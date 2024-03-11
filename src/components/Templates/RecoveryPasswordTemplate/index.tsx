import React from "react";
import { LayoutNoUserTemplate } from "../LayoutNoUserTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";

export const RecoveryPasswordTemplate = () => {
  return (
    <LayoutNoUserTemplate>
      <S.Container>
        <Title>Recuperação de senha</Title>
        <Text>
          Digite sua <span className="textStrong">nova senha</span>.
        </Text>
        <S.Form>
          <div>
            <S.Label>
              Senha<span>*</span>
            </S.Label>
            <Input type="password" required />
          </div>
          <div>
            <S.Label>
              Confirmar Senha<span>*</span>
            </S.Label>
            <Input type="password" required />
          </div>
          <div>
            <Button>Alterar</Button>
          </div>
        </S.Form>
      </S.Container>
    </LayoutNoUserTemplate>
  );
};
