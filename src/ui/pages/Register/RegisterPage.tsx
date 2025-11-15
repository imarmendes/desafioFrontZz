import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { MUITextField } from '../../components/mui/MUITextField'
import { MUIButton } from '../../components/mui/MUIButton'

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setError(null)
    if (password !== confirm) {
      setError("As senhas não coincidem")
      return
    }

    setLoading(true)
    try {
      // TODO: vm.register(name, email, password)
      await new Promise(r => setTimeout(r, 700))
      console.log('register simulated', { name, email })
    } catch (err: any) {
      setError(err?.message ?? "Erro ao cadastrar")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Cadastro
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <MUITextField
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />

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
              autoComplete="new-password"
            />

            <MUITextField
              label="Confirmar senha"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              autoComplete="new-password"
            />

            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            <Stack spacing={2} sx={{ mt: 2 }}>
              <MUIButton
                type="submit"
                disabled={loading}
                label={loading ? 'Cadastrando...' : 'Cadastrar'}
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Já tem conta?{' '}
              <Link component={RouterLink} to="/login">
                Entrar
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}
