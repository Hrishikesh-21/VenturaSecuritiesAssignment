import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import user from "../assets/img/user.jpg"
import oyoImg from "../assets/img/OYO.png"
import GoAir from "../assets/img/GOAir.png"
import BajajEnergy from "../assets/img/Bajaj.png"
import { useNavigate } from 'react-router-dom';



export const IpoList = () => {

  const navigate = useNavigate();

  function createData(company, issueSize, priceRange, minInvest, img, launchDate) {
    return { company, issueSize, priceRange, minInvest, img, launchDate };
  }

  const rows = [
    createData('GO Air', "36000 Crores", "₹50-60", "₹ 50,000", GoAir, "4th-7th Oct 2022"),
    createData('Bajaj Energy', "36000 Crores", "₹50-60", "₹ 50,000", BajajEnergy, "4th-7th Oct 2022"),
    createData('OYO', "36000 Crores", "₹50-60", "₹ 50,000", oyoImg, "4th-7th Oct 2022"),
  ];


  function redirectToDetails(rowData) {
    debugger
    navigate("/Details",{ state: rowData })
    console.log(rowData, "rowdata")

  }




  return (
    <Container fixed>
      <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
        <Table aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead className='headBack'>
            <TableRow
            >
              <TableCell sx={{ fontWeight: 'bold' }}>Company/Issue Date</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Issue Size&nbsp;</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price Range&nbsp;</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Min Invest/Qty&nbsp;</TableCell>
              {/* <TableCell align="right">Min Invest/Qty&nbsp;</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody

          >
            {rows.map((row) => (
              <TableRow key={row.company} onClick={() => { redirectToDetails(row) }}>
                <TableCell component="th" scope="row">
                  <div className="wrapImgText">
                    <span>
                      <img src={row.img} alt="user" className='userImg' />
                    </span>
                    <div className="wrapData">
                      <span style={{ fontWeight: "bold" }}>
                        {row.company}
                      </span>
                      <span>
                        {row.launchDate}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.issueSize}</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.priceRange}</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.minInvest}</TableCell>
                {/* <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}














