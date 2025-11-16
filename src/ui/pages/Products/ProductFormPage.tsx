import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductFormViewModel } from "../../../core/viewmodels/ProductFormViewModel";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const ProductFormPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = id ? Number(id) : undefined;

  const vm = useProductFormViewModel(productId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const ok = await vm.save();
    if (ok) navigate("/products");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {productId ? "Editar Produto" : "Novo Produto"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Nome"
              value={vm.name}
              onChange={(e) => vm.setName(e.target.value)}
              required
            />

            <TextField
              label="Preço"
              type="number"
              value={vm.price}
              onChange={(e) => vm.setPrice(e.target.value)}
              required
            />

            {vm.error && (
              <Typography color="error" variant="body2">
                {vm.error}
              </Typography>
            )}

            <Button type="submit" variant="contained" disabled={vm.loading}>
              {vm.loading
                ? "Salvando..."
                : productId
                ? "Salvar Alterações"
                : "Criar Produto"}
            </Button>

            <Button variant="text" onClick={() => navigate("/products")}>
              Voltar
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};
