import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MUITextField } from '../../components/mui/MUITextField'
import { MUIButton } from '../../components/mui/MUIButton'
// import type { LoginViewModel } from '../../../core/viewmodels/LoginViewModel'

type Props = {
  // onSubmit?: (email: string, password: string) => Promise<void>
}

export const LoginForm: React.FC<Props> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // TODO — vm.login(email, password)
      await new Promise(r => setTimeout(r, 700))
      console.log('login simulated', { email, password })
    } catch (err: any) {
      setError(err?.message ?? 'Erro ao tentar logar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <MUITextField
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <MUITextField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />

        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <MUIButton
          type="submit"
          disabled={loading}
          label={loading ? 'Entrando...' : 'Entrar'}
        />
      </Stack>
    </Box>
  )
}
