import { Box, Typography } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { Item } from "../../../types";
import { CellParam } from "../components/CellParam";
import { useNavigate } from "react-router-dom";

export interface DataTableInterface {
  data: Item[] | [];
}

const DataTable: React.FC<DataTableInterface> = ({ data }) => {
  const navigate = useNavigate();

  const handleSelectionItem = (id: number) => {
    navigate({
      pathname: `/items/${id}`,
    });
  };

  const CellComponent = ({ params }: { params: GridRenderCellParams }) => (
    <div
      onClick={() => {
        handleSelectionItem(+params.id);
      }}
    >
      <CellParam>{params.value}</CellParam>
    </div>
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      width: 30,
      renderCell: (params: GridRenderCellParams) => (
        <CellComponent params={params} />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <CellComponent params={params} />
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <div
          onClick={() => {
            handleSelectionItem(+params.id);
          }}
        >
          <CellParam>{params.value.name}</CellParam>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <CellComponent params={params} />
      ),
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      autoHeight
      pageSize={4}
      rowsPerPageOptions={[4]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default DataTable;
