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
    // не писала код через .map() з використанням одного стейту, бо теги для заповнення інформації у всіх трьох пунктів різні
    const[openPar1, setOpenPar1] = useState(true);
    const[openPar2, setOpenPar2] = useState(false);
    const[openPar3, setOpenPar3] = useState(false);

    // винесла алгоритм у змінні, бо у тегах не працюють. відображається як текст
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
                        // помістила результат з smallText2 у тег, бо при звернутому тексту - текс втрачав настройки розміру шрифту
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
                        // помістила результат з smallText2 у тег, бо при звернутому тексту - текс втрачав настройки розміру шрифту
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
                        // помістила результат з smallText2 у тег, бо при звернутому тексту - текс втрачав настройки розміру шрифту
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












// export function HowToChoose() {
//     return (      
//         <div className='video-container'>
//             <video className='video2' src={ video2 } autoPlay muted playsInline loop></video>
//             <div className='text-container'>
//                 <CustomTypography variant='h3' textAlign='center' sx={{ fontSize: { xs: 20, sm: 33, md: 40, lg: 48 } }}>Правила выбора обуви или как выбрать идеальную пару</CustomTypography>
//                 <List>
//                     <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
//                         <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>
//                             1. Aнатомические особенности стопы и размер
//                         </CustomTypography>
//                         <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             Конечно, первое, на что нужно обращать внимание — особенности строения вашей стопы:
//                         </CustomTypography>
//                         <List sx={{ py: { xs: 0.5, sm: 1} }}>
//                             <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                                 <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                                 Полнота
//                             </CustomListItem>
//                             <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                                 <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                                 Ширина
//                             </CustomListItem>
//                         </List>
//                         <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             Если у вас большая полнота, не надейтесь, что в узких туфлях вам будет удобно. Обладателей широкой стопы это тоже касается.
//                         </CustomTypography>
//                     </ListItem>
//                     <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
//                         <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>2. Размер</CustomTypography>
//                         <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             Важно подобрать правильный размер обуви. Не верьте продавцам, которые шепчут, что пара растянется немного позже. Да, безусловно, обувь со временем немного раздастся, но минимально. Поэтому, нужно сразу попытаться попасть в размер.
//                         </CustomTypography>
//                         <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             В процессе примерки постойте, походите в обуви по магазину. Попытайтесь поймать все свои ощущения. Если пальцы упираются в носок или обувь их сдавливает — это не ваша пара. Попробуйте примерить размер побольше или другую модель.
//                         </CustomTypography>
//                     </ListItem>
//                     <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: { xs: 0.5, sm: 1} }}>
//                     <CustomTypography variant='h4' borderBottom='1px solid black' pt={1} sx={{ fontSize: { xs: 17, sm: 23, md: 28, lg: 34 } }}>3. Примерка</CustomTypography>
//                     <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1 }}>
//                         Несколько правил примерки: 
//                     </CustomTypography>
//                     <List>
//                         <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                             Не примеряйте по-одному. Надевайте пару! Так как ноги могут отличаться одна от другой.
//                         </CustomListItem>
//                         <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                             Согните руками подошву. Она должна быть эластичной, иначе вам будет некомфортно носить обувь.
//                         </CustomListItem>
//                         <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                             Отправляйтесь за новой парой обуви вечером. После трудового дня нога немного отекает, поэтому обувь купленная утром, к вечеру может стать тесной и доставлять неудобства.
//                         </CustomListItem>
//                         <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
//                             <Typography fontSize={10} mr={1}>&#9830;</Typography>
//                             Покупая зимнюю пару сапог или ботинок, не забудьте плотный носок. Часто обувь на зиму покупают осенью. когда мы еще не носим теплые носки. И примерка на тонкий носок может сбить вас с толку.
//                         </CustomListItem>
//                         </List>
//                     </ListItem>
//                 </List>
//             </div>
//         </div>
//     )
// }