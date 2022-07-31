import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  
const Home = () => {
  let dispatch=useDispatch();
  let navigate = useNavigate();
  const {users} = useSelector(state => state.data)
  useEffect(()=>{
    dispatch(loadUsers());
  },[])
  
  const handleDelete = (id) =>{
    dispatch(deleteUser(id));
  }

  return (
    <div className='container card p-0 mt-5'>
      <h1 className='card-header text-start fs-5'>Dashboard</h1>
      <div className='p-5'>
        <Button variant="contained" onClick={()=>navigate('/Newuser')}>New user</Button>
    <div className='container card p-0 mt-3'>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{Object.values(row.address).slice(0,-1).toString()}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button color="primary" onClick={()=>navigate(`/Edit/${row.id}`)}>Edit</Button>
                <Button color="secondary" onClick={()=>handleDelete(row.id)}>Delete</Button>
              </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default Home 