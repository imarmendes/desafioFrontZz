import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { LoginForm } from './LoginForm'

export const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Entrar
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Faça login com sua conta
          </Typography>

          <LoginForm />

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Não tem conta?{' '}
              <Link component={RouterLink} to="/register">
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}
