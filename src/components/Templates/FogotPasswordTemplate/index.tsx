import React from "react";
import * as S from "./styles";
import { LayoutTemplateNoUser } from "../LayoutTemplateNoUser";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";

export const FogotPasswordTemplate = () => {
  return (
    <LayoutTemplateNoUser>
      <S.Container>
        <Title>Esqueceu sua senha?</Title>
        <Text>
          Coloque o seu <span className="textStrong">e-mail</span> e enviaremos
          um <span className="textStrong">link</span> para alterá-la.
        </Text>
        <S.Form>
          <div>
            <S.Label>
              E-mail<span>*</span>
            </S.Label>
            <Input required type="email" />
          </div>
          <div>
            <Button>Enviar E-mail</Button>
          </div>
        </S.Form>
      </S.Container>
    </LayoutTemplateNoUser>
  );
};
