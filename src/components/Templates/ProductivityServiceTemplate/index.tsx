import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormFilterProductivityService } from "../../Molecules/FormFilterProductivityService";

export const ProductivityServiceTemplate = () => {
  return (
    <LayoutTemplate title="Relatório de Produção por Tipo de Serviço">
      <FormFilterProductivityService submitForm={(data) => console.log(data)} />
      <div>ProductivityServiceTemplate</div>
    </LayoutTemplate>
  );
};
