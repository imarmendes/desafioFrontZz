import React from 'react'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

type Props = ButtonProps & {
  label?: React.ReactNode
}

export const MUIButton: React.FC<Props> = ({ label, children, ...rest }) => {
  return (
    <Button variant="contained" fullWidth {...rest}>
      {label ?? children}
    </Button>
  )
}
