import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query !== "") {
      navigate({
        pathname: "/items",
        search: `?search=${query}`,
      });
    }
  };
  return (
    <FormSearchStyled>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <Stack
          direction='row'
          sx={{ border: "1px solid grey", borderRadius: "4px" }}
        >
          <TextField
            fullWidth
            sx={{ borderRadius: "none" }}
            placeholder='Buscar Item'
            value={query}
            onChange={handleChange}
          />
          <Button type='submit' variant='contained'>
            <SearchIcon style={{ fontSize: "28px" }} />
          </Button>
        </Stack>
      </form>
    </FormSearchStyled>
  );
};

export default FormSearch;

export const FormSearchStyled = styled.div`
  width: 100%;

  form {
    width: 100%;
  }
`;
