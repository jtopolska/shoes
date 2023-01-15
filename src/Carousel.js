import { useState } from 'react';
import { dataCarousel } from './dataCarousel';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

function Carousel() {
    const [slide, setSlide] = useState(0);
    const { image } = dataCarousel[slide];

    const showPrevSlide = () => {
        setSlide(slide => {
            slide--;

            if (slide < 0) {
                return slide = dataCarousel.length - 1;
            }
            return slide;
        })
    }

    const showNextSlide = () => {
        setSlide(slide => {
            slide++;

            if (slide > dataCarousel.length - 1) {
                return slide = 0;
            }
            return slide;
        })
    }

    return (
        <>
            <div className='container'>
                <div className="prev" onClick={ showPrevSlide }>
                    <ArrowBackIosRounded fontSize="large"/>
                </div>
                <img className='carousel-img' src={ image } alt="Shoes" />
                <div className="next" onClick={ showNextSlide }>
                    <ArrowForwardIosRounded fontSize="large"/>
                </div>
            </div>
            <h1>Интернет-магазин обуви <br /> JULIA TOPOLSKA</h1>
        </>
    );
}
export default Carousel;