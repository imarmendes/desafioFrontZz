import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MUITextField } from '../../components/mui/MUITextField'
import { MUIButton } from '../../components/mui/MUIButton'
import { useLoginViewModel } from '../../../core/viewmodels/LoginViewModel'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../core/auth/AuthContext'

export const LoginForm: React.FC = () => {
  const vm = useLoginViewModel()
  const navigate = useNavigate()
  const { login } = useAuth()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = await vm.login()

    if (result) {
      login(result) // atualiza o contexto de autenticação
      navigate('/products')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Stack spacing={2} sx={{ mt: 2 }}>
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
          autoComplete="current-password"
        />

        {vm.error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {vm.error}
          </Typography>
        )}

        <MUIButton
          type="submit"
          disabled={vm.loading}
          label={vm.loading ? 'Entrando...' : 'Entrar'}
        />
      </Stack>
    </Box>
  )
}
