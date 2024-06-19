import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormFilterProductivityService } from "../../Molecules/FormFilterProductivityService";

export const ProductivityServiceTemplate = () => {
  return (
    <LayoutTemplate title="Relatório de Produção por Tipo de Serviço">
      <FormFilterProductivityService />
      <div>ProductivityServiceTemplate</div>
    </LayoutTemplate>
  );
};
