import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Field from './Field/Field';
import theme from './theme';


export default function CustomStyles() {
  return (      

    <ThemeProvider theme={theme}>
      <Field/>
    </ThemeProvider>
    
  );
}
