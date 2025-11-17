import React from 'react'
import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

export const MUITextField: React.FC<TextFieldProps> = (props) => {
  return <TextField margin="normal" fullWidth {...props} />
}
