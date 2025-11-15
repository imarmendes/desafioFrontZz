import React from "react";
import { useProductListViewModel } from "../../../core/viewmodels/ProductListViewModel";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const ProductsPage: React.FC = () => {
  const vm = useProductListViewModel();

  if (vm.loading) return <div>Carregando produtos...</div>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Produtos
        </Typography>

        <List>
          {vm.products.map((p) => (
            <ListItem
              key={p.id}
              secondaryAction={
                <IconButton onClick={() => vm.remove(p.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={p.name} secondary={`R$ ${p.price}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};
