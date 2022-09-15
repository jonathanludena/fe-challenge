import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { ButtonNewSearch } from "../../components";
import { getResults } from "../../services";
import { Item } from "../../types";
import { DataTable } from "./DataTable";

const Results = () => {
  const [data, setData] = useState<Item[]>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (searchParams.get("search")) {
      const getResultsData = async () => {
        const res = await getResults(searchParams.get("search") || null);
        if (res.length > 0) setData(res);
        setLoading(false);
      };

      getResultsData();
    }
  }, [searchParams.get("search")]);

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>Results - Challenge Frontend</title>
        <meta
          name='description'
          content='Page Results found - Challenge Frontend'
        />
        <noscript>
          Este proyecto necesita javascript para funcionar. Aquí debe aparecer
          los Resultados de búsqueda de item de Challenge Frontend
        </noscript>
      </Helmet>
      <Typography variant='h2' gutterBottom>
        Results
      </Typography>
      de: "<code>{searchParams.get("search")}</code>"
      {loading ? <CircularProgress /> : <DataTable data={data} />}
      <ButtonNewSearch />
    </Box>
  );
};

export default Results;
