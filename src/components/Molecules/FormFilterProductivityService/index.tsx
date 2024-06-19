import React from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

export const FormFilterProductivityService = () => {
  return (
    <S.Form>
      <div>
        <InputDate showIcon onChange={() => ""} placeholderText="___/___/___" />
      </div>

      <div>
        <InputDate showIcon onChange={() => ""} placeholderText="___/___/___" />
      </div>

      <div>
        <SimpleSelect placeholder="" />
      </div>

      <div>
        <SimpleSelect placeholder="" />
      </div>
    </S.Form>
  );
};
