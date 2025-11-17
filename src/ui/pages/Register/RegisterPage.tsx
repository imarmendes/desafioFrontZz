// ui/pages/Register/RegisterPage.tsx
import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { RegisterForm } from './RegisterForm'

export const RegisterPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Criar Conta
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Preencha os dados abaixo para se registrar
          </Typography>

          <RegisterForm />

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              Já tem conta?{" "}
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
