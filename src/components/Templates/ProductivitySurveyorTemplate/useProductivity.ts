import React, { useState } from "react";

export const useProductivity = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return { filterOpen, setFilterOpen };
};
