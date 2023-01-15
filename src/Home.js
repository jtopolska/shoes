import { useState, React } from 'react';
import Carousel from './Carousel';
import MenWomenFilter from './MWFilter';
import Care from './Care';
import { Container, Card, CardMedia, CardContent, Grid, Typography, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Video } from './Video';
import { Subscription } from './Subscription';

function Home(props) {
    const [open, setOpen] = useState(false);

    const showSizes = (shoe) => {
        shoe.show = !shoe.show;
        setOpen(!open);
    }

    return (
        <>
        <Carousel />
        <MenWomenFilter filter={ props.mwFilter }/>

        <Container className='items-container'>
            <Grid container>
                {props.dataState.map(shoe => {
                    const { id, image, title, season, size, color, material, base, price, show, size1, size2, size3, size4, size5, size6 } = shoe;
                    
                    return (
                        <Grid item xs={12} md={6} p={1} key={ id }>
                            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                                <CardMedia component="img"
                                sx={{ width: { xs: '100%', sm: '45%', md: '50%' } }}
                                image={ image }
                                alt="A pair of shoes"
                                />
                                <CardContent sx={{ p: 1, width: '100%' }} className='cardContent'>
                                    <Typography component="h6" variant="h6" sx={{ fontFamily: 'Poiret One, cursive', fontWeight: 'bold' }}>
                                        { title }
                                    </Typography>
                                    <ul className='description-list'>
                                        <li>Сезон: { season }</li>
                                        <li>Размер: { size }</li>
                                        <li>Цвет: { color }</li>
                                        <li>Верх: { material }</li>
                                        <li>Подошва: { base }</li>
                                    </ul>

                                    <Typography variant='h6' color='text.primary' component='h6' sx={{ fontFamily: 'Poiret One, cursive', fontWeight: 'bold', mt: {xs: '5%', sm: '33%', md: '25%' } }}>
                                        ЦЕНА: { price } грн
                                    </Typography>
                                    <Button variant='outlined'  onClick={ () => showSizes(shoe) } size='small' sx={{ width: '100%', fontFamily: 'Poiret One, cursive', fontWeight: 'bold' }} endIcon={<KeyboardArrowDown />}>Купить</Button>
                                    {show && (
                                        <ul className='size-list'>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size1 }</li>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size2 }</li>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size3 }</li>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size4 }</li>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size5 }</li>
                                            <li onClick={ () => props.addToOrderFunc(shoe) }>{ size6 }</li>
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>

        <Video />
        <Care />
        <Subscription />
        </>
    );
}
export default Home;