import dataHowTo from './dataHowTo';
import { List, ListItem, Typography, styled } from '@mui/material';


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

export function ParagraphOne() {
    const { item1, item2, item3, item4 } = dataHowTo[0];

    return (
        <div>
            <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                { item1 }
            </CustomTypography>
            <List sx={{ py: { xs: 0.5, sm: 1} }}>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item2 }
                </CustomListItem>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item3 }
                </CustomListItem>
            </List>
            <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                { item4 }
            </CustomTypography>
        </div>
    );
}

export function ParagraphTwo() {
    const { item1, item2 } = dataHowTo[1];

    return (
        <div>
            <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                { item1 }
            </CustomTypography>
            <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                { item2 }
            </CustomTypography>
        </div>
    );
}

export function ParagraphThree() {
    const { item1, item2, item3, item4, item5 } = dataHowTo[2];

    return (
        <div>
            <CustomTypography sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, pl: { xs: 1, sm: 2 }, pt: 1 }}>
                { item1 } 
            </CustomTypography>
            <List>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item2 }
                </CustomListItem>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item3 }
                </CustomListItem>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item4 }
                </CustomListItem>
                <CustomListItem sx={{ fontSize: { xs: 15, sm: 17, md: 20, lg: 22 }, px: { xs: 1, sm: 2}, py: { xs: 0.5, sm: 1}, lineHeight: { xs: 1.4, sm: 1.5 } }}>
                    <Typography fontSize={10} mr={1}>&#9830;</Typography>
                    { item5 }
                </CustomListItem>
            </List>
        </div>
    );
}
