import React from "react";
import { useProductListViewModel } from "../../../core/viewmodels/ProductListViewModel";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

export const ProductsPage: React.FC = () => {
  const vm = useProductListViewModel();
  const navigate = useNavigate();

  if (vm.loading) return <div>Carregando produtos...</div>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Produtos
        </Typography>

        <Button
          variant="contained"
          sx={{ mb: 2 }}
          onClick={() => navigate("/products/new")}
        >
          Criar produto
        </Button>

        {vm.products.length === 0 ? (
          <Typography color="text.secondary">Nenhum produto cadastrado.</Typography>
        ) : (
          <List>
            {vm.products.map((p) => (
              <ListItem
                key={p.id}
                secondaryAction={
                  <>
                    <IconButton onClick={() => navigate(`/products/edit/${p.id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => vm.removeProduct(p.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText primary={p.name} secondary={`R$ ${p.price}`} />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};
