import { useState } from 'react';
import { List, ListItem, Typography, styled, Button } from '@mui/material';
import { ParagraphOne, ParagraphTwo, ParagraphThree } from './ParagraphsForHowTo';
import video2 from './images/videoHowTo.mp4';
import dataHowTo from './dataHowTo';


const CustomTypography = styled(Typography)(() => ({
    color: 'black',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold',
    variant: 'subtitle1',
}))

const CustomListItem = styled(ListItem)(() => ({
    color: 'black',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold',
    display: 'flex'
}))

export function HowToChoose() {
    const[openPar1, setOpenPar1] = useState(true);
    const[openPar2, setOpenPar2] = useState(false);
    const[openPar3, setOpenPar3] = useState(false);

    let smallText1 = dataHowTo[0].item1.substring(0, 100) + '..';
    let smallText2 = dataHowTo[1].item1.substring(0, 100) + '..';
    let smallText3 = dataHowTo[2].item1.substring(0, 100) + '..';

    return ( 
        <div className='video-container'>
            <video className='video2' src={ video2 } autoPlay muted playsInline loop></video>
            <div className='text-container'>
                <CustomTypography variant='h3' sx={{ fontSize: { xs: 20, sm: 33, md: 40, lg: 48 } }}>
                    Правила выбора обуви или как выбрать идеальную пару
                </CustomTypography>
                <List>
                    <CustomListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
                        <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>
                            1. Aнатомические особенности стопы и размер
                        </CustomTypography>
                        { openPar1
                        ? <ParagraphOne />
                        : <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                                { smallText1 }
                            </CustomTypography>}
                        <Button variant='text' onClick={ () => setOpenPar1(!openPar1) } size='small' color='success' sx={{ width: '100px', fontFamily: 'Poiret One, cursive', fontWeight: 'bold' }}>
                            { openPar1 ? 'Меньше' : 'Больше' }
                        </Button>
                    </CustomListItem>
                    <CustomListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
                        <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>
                            2. Размер
                        </CustomTypography>
                        { openPar2
                        ? <ParagraphTwo />
                        : <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                            { smallText2 }
                            </CustomTypography>}
                        <Button variant='text' onClick={ () => setOpenPar2(!openPar2) } size='small' color='success' sx={{ width: '100px', fontFamily: 'Poiret One, cursive', fontWeight: 'bold' }}>
                            { openPar2 ? 'Меньше' : 'Больше' }
                        </Button>
                    </CustomListItem>
                    <CustomListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
                        <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>
                            3. Примерка
                        </CustomTypography>
                        { openPar3
                        ? <ParagraphThree />
                        : <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                            { smallText3 }
                            </CustomTypography>}
                        <Button variant='text' onClick={ () => setOpenPar3(!openPar3) } size='small' color='success' sx={{ width: '100px', fontFamily: 'Poiret One, cursive', fontWeight: 'bold' }}>
                            { openPar3 ? 'Меньше' : 'Больше' }
                        </Button>
                    </CustomListItem>
                </List>
            </div>
        </div>
    )
}
