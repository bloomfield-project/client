import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux'
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Divider from '@mui/material/Divider';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FcHighPriority, FcOk } from "react-icons/fc";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function GiveFeedback() {

    const loginData = useSelector(state => state.auth.data)
    const player_id = loginData.data.user_id;

    const [feedback, setFeedback] = useState('');
    const [response, setResponse] = useState('');
    const [responseIcon, setResponseIcon] = useState();
    const [responseD, setResponseD] = useState('');
    const [responseIconD, setResponseIconD] = useState();
    const [retrieveFeedback, setRetrieveFeedback] = useState();
    const [openDeleteFeedback, setOpenDeleteFeedback] = useState(false);
    const [f_id, setF_id] = useState();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const handleSubmit = () => {

        axios.post("/api/player/giveFeedback", {
            date: today,
            feedback: feedback,
            player_id: player_id
        })
            .then((res) => {

                if (res.data.success == 0) {
                    setResponse("Unable to added feedback / Error");
                    setResponseIcon(<FcHighPriority />);
                }

                if (res.data.success == 1) {
                    setResponse("Successfully added feedback");
                    setResponseIcon(<FcOk />);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }

            })
            .catch((err) => {
                console.log("Error of sumbit feedback", err);
            });

    };

    const handleCancel = () => {
        setFeedback('');
        window.location.reload(true);
    }

    const retrieveFeedbacks = () => {

        axios.post("/api/player/getFeedback", {
            player_id: player_id
        })
            .then((res) => {

                if (res.data.success == 1) {
                    setRetrieveFeedback(res.data.data);
                }

            })
            .catch((err) => {
                console.log("Error of retrieve feedbacks", err);
            });

    };

    useEffect(() => {
        retrieveFeedbacks();
    }, []);

    const handleDelete = () => {

        axios.post("/api/player/deleteFeedback", {
            id: f_id
        })
            .then((res) => {

                if (res.data.success == 0) {
                    setResponseD("Unable to delete feedback / Error");
                    setResponseIconD(<FcHighPriority />);
                }

                if (res.data.success == 1) {
                    setResponseD("Successfully deleted feedback");
                    setResponseIconD(<FcOk />);
                    setTimeout(() => {
                        handleCloseDeleteFeedback();
                        window.location.reload();
                    }, 1500);
                }

            })
            .catch((err) => {
                console.log("Error of delete feedback", err);
            })

    };

    const handleClickOpenDeleteFeedback = (id) => {
        setF_id(id);
        setOpenDeleteFeedback(true);
    };

    const handleCloseDeleteFeedback = () => {
        setOpenDeleteFeedback(false);
        setF_id();
    };


    return (

        <div className="page-container-1">

            <div className="header-container">
                <Header></Header>
            </div>

            <div className="body-container-1">

                <div className="navbar-container">
                    <Navbar ></Navbar>
                </div>

                <div className="body-container-2" style={{ padding: "2%", paddingTop: "1%" }}>

                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
                        <h1 style={{ fontSize: "2rem", marginBottom: "0.5%" }}>Feedback</h1>
                    </div>

                    <div style={{ width: "100%", backgroundColor: "#fff", borderRadius: "5px", paddingBottom: "0.5%" }}>

                        <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 1 }} style={{ fontFamily: "Monospace" }}>
                            Giving a Feedback
                        </Typography>

                        <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 1, fontSize: "1.3rem", color: "#964544" }} style={{ fontFamily: "Monospace" }}>
                            {responseIcon}{"\t"}{response}
                        </Typography>

                        <TextField
                            label="Type Your Feedback"
                            placeholder="Your Feedback Here.."
                            multiline
                            rows={2}
                            maxRows={4}
                            sx={{ mt: 2, mb: 2, width: "98%" }}
                            onChange={(e) => setFeedback(e.target.value)}
                        />

                        <div style={{ width: "100%", paddingRight: "1%", display: "flex", justifyContent: "flex-end" }}>
                            <Button variant="danger" style={{ width: "100px", fontFamily: "Monospace" }} onClick={handleCancel} >Cancel</Button>{' '}
                            <Button variant="success" style={{ width: "100px", marginLeft: "20px", fontFamily: "Monospace" }} onClick={handleSubmit} >Save</Button>{' '}
                        </div>

                        <Divider sx={{ color: "#c2a146", mt: 2, width: "98%", ml: 1 }} />

                        <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 2 }} style={{ fontFamily: "Monospace" }}>
                            Given Feedback
                        </Typography>

                        <div style={{ width: "98%", marginLeft: "1%", marginBottom: "1%" }}>

                            <Dialog sx={{ "& .MuiDialog-container": { "& .MuiPaper-root": { width: "100%", maxWidth: "30vw", height: "auto" }, }, }} open={openDeleteFeedback} onClose={handleCloseDeleteFeedback}>
                                <DialogContent align={"center"}>

                                    <Typography component="h1" variant="h5" sx={{ mt: 1 }} style={{ fontFamily: "Monospace", fontWeight: "bold" }}>
                                        Confirm Delete
                                    </Typography>

                                    <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 1, fontSize: "1rem", color: "#964544" }} style={{ fontFamily: "Monospace" }}>
                                        {responseIconD}{"\t"}{responseD}
                                    </Typography>

                                </DialogContent>

                                <DialogActions sx={{ width: "100%", pb: 2, display: "flex", justifyContent: "center" }}>
                                    <Button variant="success" size="sm" style={{ width: "25%", backgroundColor: "#1b8a04", color: "#fff", fontFamily: "Monospace", fontWeight: "bold", borderRadius: "20px", marginRight: "20px" }} onClick={handleDelete} >Yes</Button>{' '}
                                    <Button variant="danger" size="sm" style={{ width: "25%", backgroundColor: "#F44336", color: "#fff", fontFamily: "Monospace", fontWeight: "bold", borderRadius: "20px" }} onClick={handleCloseDeleteFeedback} >No</Button>{' '}
                                </DialogActions>
                            </Dialog>

                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Date</StyledTableCell>
                                            <StyledTableCell align="center">Feedback</StyledTableCell>
                                            <StyledTableCell align="right">Delete</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {retrieveFeedback ? retrieveFeedback.map((item) => (

                                            <StyledTableRow>
                                                <StyledTableCell align="left">{item.date}</StyledTableCell>
                                                <StyledTableCell align="center">{item.feedback}</StyledTableCell>
                                                <StyledTableCell align="right"><IconButton aria-label="delete" size="small" sx={{ color: "#f02724" }} onClick={() => { handleClickOpenDeleteFeedback(item.feedback_id) }} ><DeleteIcon fontSize="inherit" /></IconButton></StyledTableCell>
                                            </StyledTableRow>

                                        )) :
                                            ""
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>


                    </div>

                </div>

            </div>

        </div>

    );

}

export default GiveFeedback;