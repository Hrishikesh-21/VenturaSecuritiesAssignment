import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Button, makeStyles, Step, StepLabel, Stepper, useMediaQuery } from '@mui/material';
import SimCardDownloadRoundedIcon from '@mui/icons-material/SimCardDownloadRounded';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import user from "../assets/img/user.jpg"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Grid } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
export const IpoDetails = (props) => {
    // debugger
    const location = useLocation();
    const { state } = location;

    const steps = [
        'Bidding Starts',
        'Bidding Ends',
        'Allotment Finalization',
        'Refund Initiation',
        'Demat Transfer',
        'Listing Date'
    ];

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();



    function redirectToList() {
        debugger
        navigate("/")

    }



    console.log(state, "state")

    return (
        <>
            {/* <CssBaseline  className='mt-2'/> */}

            <Container fixed className='mb-2 mt-2'>
                <div className="myBox">
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                            <div className="wrapImgText">
                                <ArrowBackIosIcon
                                    onClick={() => {
                                        redirectToList()
                                    }}
                                />
                                <span>
                                    <img src={state.img} alt="user" className='userImg' />
                                </span>
                                <div className="wrapData">
                                    <span style={{ fontWeight: "bold" }}>
                                        {state.company}
                                    </span>
                                    <span>
                                        {`${state.company} Pvt Ltd`}
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                            <Box className="d-flex justify-content-sm-start justify-content-end align-items-center h-100">
                                <div className='downloadButton'>
                                    {/* <Button variant="" startIcon={<SimCardDownloadRoundedIcon />}/> */}
                                    <SimCardDownloadRoundedIcon style={{ margin: "10px" }} className='svgDownload' />
                                    <Button variant="contained">Apply Now</Button>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div>

            </Container>


            <Container fixed>
                <Box className="myBox">
                    <p className='mb-1 fw-bold'>IPO Details</p>
                    <Box className="myBox">
                        <Grid container>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Issue Size</small>
                                    <span className='text-muted display-1 fw-bold'>₹ 3600-3700 Cr</span>
                                </div>

                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Price Range</small>
                                    <span className='text-muted display-1 fw-bold'>₹ 100-₹ 200</span>
                                </div>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Minimum Amount</small>
                                    <span className='text-muted display-1 fw-bold'>₹ 50,000</span>
                                </div>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col ">
                                    <small className="fw-bold text-light">Lot Size</small>
                                    <span className='text-muted display-1 fw-bold'>150 Shares</span>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Issue Date</small>
                                    <span className='text-muted display-1 fw-bold'>12Dec-15Dec</span>
                                </div>

                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Listed On</small>
                                    <span className='text-muted display-1 fw-bold'>15 Dec</span>
                                </div>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col">
                                    <small className="fw-bold text-light">Listed Price</small>
                                    <span className='text-muted display-1 fw-bold'>₹ 150</span>
                                </div>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
                                <div className="d-flex flex-col ">
                                    <small className="fw-bold text-light">listing Gain</small>
                                    <div>
                                        <span className='text-muted display-1 fw-bold'>₹ 10</span>
                                        <span className='text-muted display-1 fw-bold' style={{ color: "red" }}>(10.0%)</span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container >

            <Container className='mt-2'>
                <Grid container>
                    <Grid item size={{ xs: 12, md: 6, lg: 12 }}>
                        <Box className="myBox">
                            <Stepper activeStep={5} orientation={isSmallScreen ? 'vertical' : 'horizontal'}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Container fixed className='mt-2'>


                <Box className="myBox">
                    <p className='mb-1 fw-bold'>About the Company</p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia accusantium ipsa eum labore incidunt. Accusantium unde magnam ut.
                    Autem iusto ad totam sapiente asperiores voluptas dolores consectetur labore id fugiat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, exercitationem dolorum! Repellat voluptate nostrum quisquam sed officiis eius ipsum molestiae deserunt nemo assumenda aspernatur,
                    laboriosam natus asperiores tenetur itaque! Cum?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis ad neque quos aut vel nobis perferendis voluptate quam consectetur porro! Qui cumque,
                    deleniti autem incidunt dolores, tenetur quia ab impedit beatae aut corporis. Aliquam quae, id voluptate consequatur natus,
                    at ut obcaecati ex nulla quos omnis ratione, eius nisi blanditiis reiciendis unde quisquam?
                    Itaque, suscipit consectetur totam accusantium ipsum culpa voluptatibus saepe quia fugiat.
                    Dolores reiciendis, et ducimus dolore reprehenderit praesentium placeat tempore quis tenetur exercitationem!
                    Sapiente nisi tempore, ad accusamus delectus veniam sequi eligendi, aliquid doloremque beatae,
                    consectetur est non cum? Provident iusto eveniet minus nemo fugit similique dolorum veritatis voluptate ipsum corrupti quae omnis
                    corporis fuga, neque asperiores harum, tempora mollitia expedita inventore voluptatibus quidem.
                    Minus amet accusantium mollitia nisi ducimus ex ab temporibus porro,
                    quisquam reprehenderit rerum adipisci possimus dicta saepe animi earum ullam.
                    Consectetur doloribus asperiores consequuntur saepe assumenda,
                    laboriosam optio laudantium doloremque magni dicta, cupiditate sint animi nemo debitis dolorem.
                    Accusantium dolore, minus quidem ullam ab ea possimus incidunt ipsa, a aliquid aspernatur, ratione voluptatem vero?
                    Tempore corrupti porro a nemo id quisquam iusto,
                    dolore suscipit quidem necessitatibus possimus non officia aut in reiciendis quod voluptatum quam earum sit praesentium at.
                    Nemo, sit consequatur. Labore?
                </Box>
            </Container>



        </>
    );
}




