import { Grid, Box, Typography, styled, Divider, Link, Button, createTheme, ThemeProvider, Input } from "@mui/material";

const CustomTypography = styled(Typography)(() => ({
    color: 'white',
    fontFamily: 'Poiret One, cursive',
    variant: 'body1',
    display: 'flex',
    alignItems: 'center'
}))

const CustomInput = styled(Input)(() => ({
    color: '#0AA1DD',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold'
}))

const theme = createTheme({
    palette: {
        secondary: {
        main: '#0AA1DD',
        },
    },
});

export function Footer() {
    return (
        <Box sx={{ bgcolor: '#212529', flexGrow: 1 }} id='contacts'>
            <Grid container pt={1} sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                <Grid item xs={12} sm={3} md={4} p={1}>
                    <CustomTypography variant="h5" gutterBottom>
                        О нас
                    </CustomTypography>
                    <CustomTypography>
                        Новости
                    </CustomTypography>
                    <CustomTypography>
                        Сотрудничество
                    </CustomTypography>
                    <Box component='div' display='flex' flexDirection='column' width='140px'>
                    <ThemeProvider theme={theme}>
                        <CustomInput placeholder='Электронный адрес' color='secondary'/>
                    </ThemeProvider>
                    <Button variant='outlined' sx={{ color: '#0AA1DD',
                                                border: '1px solid #ffc107',
                                                fontWeight: 'bold',
                                                fontFamily: 'Poiret One, cursive',
                                                fontSize: { xs: 10, sm: 10, md: 12, lg: 12 },
                                                mt: 0.5,
                                                '&:hover': {
                                                    color: 'black',
                                                    backgroundColor: '#ffc107',
                                                    border: '1px solid #ffc107'
                                                }
                                                }}>Подписаться</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={4} p={1}>
                    <CustomTypography variant="h5" gutterBottom>
                        Покупателю
                    </CustomTypography>
                    <CustomTypography>
                        Доставка и оплата
                    </CustomTypography>
                    <CustomTypography>
                        Гарантия и возврат
                    </CustomTypography>
                    <CustomTypography>
                        Акции
                    </CustomTypography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} p={1}>
                    <CustomTypography variant="h5" gutterBottom>
                    Интернет-магазин обуви <br />JULIA TOPOLSKA
                    </CustomTypography>
                    <CustomTypography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="contact-icon" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        Пн - Вс  10:00 - 19:00
                    </CustomTypography>
                    <CustomTypography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="contact-icon" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        +38 (066) 123-45-67
                    </CustomTypography>
                    <CustomTypography>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="contact-icon" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        topolsk92@gmail.com
                    </CustomTypography>
                </Grid>
            </Grid>
            <Divider color='white' variant='middle'/>
            <CustomTypography p={1} variant='body2'> 
                <Link href='https://github.com/jtopolska' display='inline' color='#0AA1DD' fontWeight='bold' underline='none'>&#169; 2023 Designed and developed by Yuliia Topolska.</Link>
            </CustomTypography>
            <CustomTypography px={1} pb={1} variant='caption'>
                The site was created for educational purposes. The images were taken from sources such as: https://unsplash.com, https://www.pexels.com, https://www.instagram.com
            </CustomTypography>
        </Box>
    );
}