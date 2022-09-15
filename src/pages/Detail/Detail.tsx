import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getResItemById } from "../../services";
import { Item } from "../../types";
import { DetailContainer } from "./components/DetailContainer";

export interface DetailInterface {}

const Detail: React.FC<DetailInterface> = () => {
  const [data, setData] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    if (id) {
      const getResultItem = async () => {
        const res = await getResItemById(Number(id));
        if (res) {
          setData(res);
        }
        setLoading(false);
      };

      getResultItem();
    }
  }, [id]);

  return (
    <DetailContainer>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Detail - Challenge Frontend</title>
        <meta
          name='description'
          content='Page Detail of item selectioned - Challenge Frontend'
        />
        <noscript>
          Este proyecto necesita javascript para funcionar. Aquí debe aparecer
          Detalle de item selecionado o invocado desde el path con el id de
          Challenge Frontend
        </noscript>
      </Helmet>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{ maxWidth: "60%", display: "flex", justifyContent: "center" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography variant='h5' component='div' gutterBottom>
                {data?.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Precio: {data?.price}
              </Typography>
              <Typography variant='body2'>{data?.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </DetailContainer>
  );
};

export default Detail;
