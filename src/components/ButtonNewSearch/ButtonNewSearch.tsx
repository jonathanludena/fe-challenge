import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface ButtonNewSearchInterface {}

const ButtonNewSearch: React.FC<ButtonNewSearchInterface> = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <Stack padding={4}>
      <Button
        variant='contained'
        endIcon={<SearchIcon style={{ fontSize: "28px" }} />}
        onClick={handleClick}
      >
        New Search
      </Button>
    </Stack>
  );
};

export default ButtonNewSearch;
