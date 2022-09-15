import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { ButtonNewSearch } from "../../../../components";

export interface DetailContainerInterface {
  children: React.ReactNode;
}

const DetailContainer: React.FC<DetailContainerInterface> = ({ children }) => {
  return (
    <DetailContainerStyled>
      <Stack direction='column' alignItems='center'>
        <Typography variant='h2' gutterBottom>
          Detail Selection
        </Typography>
        {children}

        <ButtonNewSearch />
      </Stack>
    </DetailContainerStyled>
  );
};

export default DetailContainer;

export const DetailContainerStyled = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
`;
