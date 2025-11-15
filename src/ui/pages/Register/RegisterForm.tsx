// ui/pages/Register/RegisterForm.tsx
import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MUITextField } from '../../components/mui/MUITextField'
import { MUIButton } from '../../components/mui/MUIButton'
import { useRegisterViewModel } from '../../../core/viewmodels/RegisterViewModel'

export const RegisterForm: React.FC = () => {
  const vm = useRegisterViewModel()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const user = await vm.register()

    if (user) {
      console.log("Registered:", user)
      // TODO → navegar para /products ou /login
    }
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ mt: 2 }}>

        <MUITextField
          label="Nome"
          value={vm.name}
          onChange={(e) => vm.setName(e.target.value)}
          required
        />

        <MUITextField
          label="E-mail"
          type="email"
          value={vm.email}
          onChange={(e) => vm.setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <MUITextField
          label="Senha"
          type="password"
          value={vm.password}
          onChange={(e) => vm.setPassword(e.target.value)}
          required
        />

        <MUITextField
          label="Confirmar senha"
          type="password"
          value={vm.confirmPassword}
          onChange={(e) => vm.setConfirmPassword(e.target.value)}
          required
        />

        {vm.error && (
          <Typography color="error" variant="body2">
            {vm.error}
          </Typography>
        )}

        <MUIButton
          type="submit"
          disabled={vm.loading}
          label={vm.loading ? "Criando conta..." : "Cadastrar"}
        />
      </Stack>
    </Box>
  )
}
