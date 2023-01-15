import menPic from './images/men60.jpg';
import womenPic from './images/women60.jpg';
import { Button, Box, Container, Paper, createTheme, ThemeProvider, styled } from '@mui/material';
import { grey } from '@mui/material/colors';


export default function MenWomenFilter({filter}) {
  const theme = createTheme({
      palette: {
          primary: {
          main: '#000000',
          },
      },
  });

  const ColorButton = styled(Button)(() => ({
    color: 'black',
    backgroundColor: grey[200],
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: grey[300],
    },
  }));

  return ( 
    <>       
    <Container sx={{ display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#FBF8F1',
                    mt: 2,
                    p: { xs: 0.5, sm: 1 },
                    '& > :not(style)': {
                    m: { xs: 0.25, sm: 1 },
                    p: { xs: 0.5, sm: 1, md: 2 },
                    }}}>
      <Paper elevation={6}>
        <img className='men-img' src={ menPic } alt='Men shoes' />
        <Box component='div' className='btn-container' sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' onClick={ () => filter('men') } sx={{ color: 'black',
                                            fontFamily: 'Poiret One, cursive',
                                            fontWeight: 'bold',
                                            fontSize: { xs: 7, sm: 11, md: 14, lg: 16 },
                                            mr: { xs: 1, md: 2, lg: 3 }
                                            }}>Применить фильтр</Button>
          </ThemeProvider>
        </Box>
      </Paper>
      <Paper elevation={6}>
        <img className='women-img' src={ womenPic } alt='Women Shoes' />
        <Box component='div' className='btn-container' sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeProvider theme={theme}>
            <Button variant='outlined' onClick={ () => filter('women') } sx={{ color: 'black',
                                            fontFamily: 'Poiret One, cursive',
                                            fontWeight: 'bold',
                                            fontSize: { xs: 7, sm: 11, md: 14, lg: 16 },
                                            mr: { xs: 1, md: 2, lg: 3 }
                                            }}>Применить фильтр</Button>
          </ThemeProvider>
        </Box>
      </Paper>
    </Container>

    <Container sx={{ display: 'flex',
                    justifySelf: 'center',
                    '& > :not(style)': {
                    m: 0,
                    mb: 2,
                    mt: { xs: 1, sm: 0 },
                    p: { xs: 0.5, sm: 1 }
                    }}}>
      <ColorButton variant='contained' onClick={ () => filter('') } sx={{ width: '100%', m: 0.5, p: 0 }}>Сбросить фильтр</ColorButton>
    </Container>
    </>
  );
}
