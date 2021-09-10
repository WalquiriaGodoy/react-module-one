import React from 'react';
import Button from '@material-ui/core/Button';
import {ThemeProvider, createTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';


// a função createtheme cria o objeto theme para ser uma propriedade do themeprovider
// é preciso criar o objeto usando essa função
// as forma de passar as propriedades do objeto theme estão no tutorial

function App() {
  const theme = createTheme({
      palette: {
        primary: {
          main: red[500],
        },
        secondary: {
          main: blue[500],
        },
      },
    });

  // criei um objeto usando a função createtheme e passei algumas propriedades 
  // para saber quais são as possíveis propriedades e como passá-las, ver tutorial
  // alterar cor na paleta de cores, tutorial

  return (

    <ThemeProvider theme={theme}>
      <Button variant="contained" color='primary'>Hello World</Button>
    </ThemeProvider>            
    
    // o themeprovider recebe um objeto como propriedade, o objeto é o theme 
    // o themeprovider engloba todods os componente aos quais ele será aplicado


  )
  
 
}
  
export default App;