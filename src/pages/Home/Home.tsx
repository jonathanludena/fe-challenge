import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { Helmet } from "react-helmet";
import { FormSearch } from "./Components/FormSearch";

const Home = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home - Challenge Frontend</title>
        <meta name='description' content='Page Home - Challenge Frontend' />
        <noscript>
          Este proyecto necesita javascript para funcionar. Aquí debe aparecer
          el Home de Challenge Frontend
        </noscript>
      </Helmet>
      <Stack direction='column' alignItems='center'>
        <Typography variant='h1' gutterBottom>
          Challenge Frontend
        </Typography>

        <FormSearch />
      </Stack>
    </Box>
  );
};

export default Home;
