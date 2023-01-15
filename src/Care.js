import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, Typography, styled } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';


const CustomTypography = styled(Typography)(() => ({
    color: 'black',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
}))

const CustomListItem = styled(ListItem)(() => ({
    paddingLeft: 5,
    paddingRight: 0,
    fontWeight: 'bold'
}))
    

function Care() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <CustomTypography variant='h3' sx={{ textAlign: 'center', my: 1, fontSize: { xs: 30, sm: 35, md: 40, lg: 48 } }}>Уход за обувью</CustomTypography>
            <Typography variant='body1' sx={{ fontFamily: 'Poiret One, cursive', textAlign: 'center', mt: 1.5, p: 1, fontSize: { xs: 16, sm: 19, md: 23 } }}>
                Покупая новую пару обуви, хочется надолго сохранить ее первозданный вид. Чтобы достичь желаемого, необходимо обеспечить ей ежедневный качественный уход при помощи специальных очищающих и питательных средств. Но прежде чем отправиться в магазин за кремом или пропиткой, следует разобраться в особенностях ухода за обувью из различных материалов.
            </Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <CustomTypography sx={{ width: '100%', fontSize: { xs: 18, sm: 20, md: 23 } }}>
                        Общие правила грамотного ухода за обувью
                    </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Из какого бы материала ни была изготовлена пара обуви, необходимо регулярно ухаживать за ней, чтобы сохранить первозданный вид на длительное время. Современные технологии позволили создать множество специализированных материалов и средств, специально разработанных для каждого типа материала, так что подобрать качественную обувную косметику не составит труда. Итак, ухаживая за обувью, регулярно выполняйте следующие действия:
                    </CustomTypography>
                    <List>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - каждый раз, приходя домой, очищайте обувь от пыли и грязи;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - никогда не оставляйте обувь мокрой — вытирайте ее насухо при помощи мягкой тряпки;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - раз в неделю проводите процедуру тщательной очистки, питания и увлажнения;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - не сушите обувь вблизи батарей или источников огня;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - не наносите средства по уходу слишком толстым слоем — это повышает риск возникновения разводов и пятен.
                        </CustomListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                >
                    <CustomTypography sx={{ width: '100%', fontSize: { xs: 16, sm: 19, md: 23 } }}>
                        Уход за кожаными изделиями
                    </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Натуральная кожа — один из самых практичных материалов. Впрочем, если пренебречь правилами ухода, она может пересохнуть и покрыться микротрещинами, что портит не только внешний вид, но и влияет на водонепроницаемость.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        После каждой носки необходимо протирать обувь влажной тряпочкой. Оставлять грязь на туфлях категорически запрещено. Раз в неделю изделия из кожи следует подвергать более глубокой очистке, состоящей из следующих этапов:
                    </CustomTypography>
                    <List>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - мойка обуви с помощью специальных шампуней или пенок;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - сушка изделий при комнатной температуре (избегайте перегрева обуви, это грозит нарушением целостности покрова);
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - нанесение специальных питающих и красящих средств;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - использование пропитки;
                        </CustomListItem>
                        <CustomListItem sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                            - полировка при помощи мягкой ткани.
                        </CustomListItem>
                    </List>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Не злоупотребляйте кремами для обуви! Их чрезмерное использование может забить поры кожи и привести к появлению пятен.
                    </CustomTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                >
                    <CustomTypography sx={{ width: '100%', fontSize: { xs: 16, sm: 19, md: 23 } }}>
                        Правила ухода за лакированной кожей
                    </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Обувь из лаковой кожи всегда в тренде. Однако чтобы носить ее не один год, необходимо обеспечить данному материалу особый уход. В первую очередь следует помнить, что лакировка очень чувствительна к воздействию внешней среды. Слишком холодная или слишком теплая погода может негативно повлиять на ее состояние. При воздействии низких или высоких температур лаковая пленка начнет пузыриться или покрываться пятнами. Чистить лак обычными средствами или питать их кремом не стоит.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Чтобы новые туфли надолго сохраняли первичный вид, необходимо регулярно очищать изделия от пыли и грязи и увлажнять лакированную поверхность. Для этого хорошо подходят как специализированные фабричные средства с содержанием глицерина или ланолина, так и некоторые масла. Протирая поверхность обуви оливковым или касторовым маслом, можно надолго сохранить ее в идеальном состоянии. Если же вам необходимо убрать изделия из лакированной кожи на хранение, обработайте их натуральным коровьим молоком, а затем тщательно вытрите и просушите.
                    </CustomTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                >
                    <CustomTypography sx={{ width: '100%', fontSize: { xs: 16, sm: 19, md: 23 } }}>
                        Особенности ухода за обувью из искусственной кожи
                    </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                    Появление качественных кожзаменителей и их сравнительно низкая стоимость относительно натуральных материалов делают обувь из искусственной кожи самым популярным вариантом среди большого числа потребителей. Однако не следует думать, что подобный материал не нуждается в уходе. Увлажнять и питать поверхность кожзаменителя следует точно так же, как и кожи, за исключением лишь того, что использовать для этих целей следует специализированные средства, предназначенные для этого вида материала.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                    Отдельное внимание стоит уделить состоянию внутренней части изделий. Если искусственная кожа вызывает потливость ног, ее следует ежедневно высушивать. Избыточная влага не только вредит материалу, но и способствует размножению бактерий, приводящих к появлению неприятного запаха.
                    </CustomTypography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMore />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                >
                    <CustomTypography sx={{ width: '100%', fontSize: { xs: 16, sm: 19, md: 23 } }}>
                        Уход за обувью из замши и нубука
                    </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Чтобы изделия из замши долго выглядели точно так же, как на полке магазина, необходимо приобрести специальную пропитку, предотвращающую негативное воздействие воды, пыли и грязи на нежный материал. Нанести такое средство необходимо непосредственно после покупки пары обуви, а затем повторять обработку каждый раз после очистки.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        Чистить замшевые изделия необходимо очень осторожно. Ни в коем случае нельзя использовать щетки с грубым ворсом или мыть их водой. Лучше всего просто протирать обувь мягкой сухой тряпочкой, а в случае сильного загрязнения использовать более грубые инструменты, в качестве которых подойдут щетки с ворсом из фланели, со специальным ластиком, губки-щетки с пористой структурой, креповые щетки.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        В том случае, если сухая очистка не помогает, следует воспользоваться специальными растворами, которые вы без особого труда найдете на полках магазинов. Также вы можете приготовить чистящее средство для замши самостоятельно. Для этого необходимо взять немного мыльного раствора и добавить туда нашатырный спирт в пропорции 1:5. После очистки обуви таким средством просто протрите ее тряпочкой, смоченной в холодной воде, и тщательно высушите обувь при комнатной температуре.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        После любых процедур структура замшевого материала может повредиться. Восстановить ее поможет пар. Просто подержите обувь над кипящей кастрюлей или чайником в течение нескольких минут, затем просушите изделие с помощью мягкой ткани. Не забудьте про цвет. Длительная носка, очищающие процедуры и солнечный свет негативно влияют на окрас замши. Чтобы освежить его, следует использовать специальную краску из баллончика, предназначенную исключительно для замши или нубука.
                    </CustomTypography>
                    <CustomTypography sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }}>
                        И помните: несмотря на щепетильный уход, обувь из замши и нубука плохо переносит сырость, поэтому носить ее в дождливую и снежную погоду всё-таки не стоит.
                    </CustomTypography>
                </AccordionDetails>
            </Accordion>

            <Typography variant='body1' sx={{ fontFamily: 'Poiret One, cursive', textAlign: 'center', p: 1, fontSize: { xs: 16, sm: 19, md: 23 } }}>
                Придерживайтесь эти простых правил, и вам больше не придется покупать новую пару туфель каждый сезон.
            </Typography>
        </div>
    );
}
export default Care;
