import React from "react";
import styled from "styled-components";

export interface CellParamInterface {
  children: React.ReactNode;
}

const CellParam: React.FC<CellParamInterface> = ({ children }) => {
  return <CellParamStyled>{children}</CellParamStyled>;
};

export default CellParam;

export const CellParamStyled = styled.div`
  cursor: pointer;
`;
