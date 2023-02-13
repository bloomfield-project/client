import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box, Container } from '@mui/material';
import Link from '@mui/material/Link';
import { useParams } from "react-router-dom";
import { FcHighPriority, FcOk } from "react-icons/fc";
import axios from "axios";


function ResetPassword() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [responseIcon, setResponseIcon] = useState(null);

    const [validUrl, setValidUrl] = useState(false);

    const param = useParams();

    const verifyUrl = () => {
        try {

            axios.post("/api/common/reset", {
                user_id: param.user_id,
                token: param.token
            })
            .then((res) => {

                if (res.data.status) {
                    setValidUrl(true);
                }

                if (res.data.error) {
                    setValidUrl(false);
                }

            })
            .catch((err) => {
                setValidUrl(false);
                console.log("Error", err);
            })

        } catch (error) {

            setValidUrl(false);
        }

    };

    useEffect(() => {

        verifyUrl();

    }, []);

    const handleResetPassword = () => {

        axios.post("/api/common/resetPwd", {
            user_id: param.user_id,
            newPassword: password,
            confirmNewPassword: confirmPassword
        })
        .then((res) => {

            if (res.data.data) {
                setResponse(res.data.data);
                setResponseIcon(<FcOk />);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }

            if (res.data.error) {
                setResponse(res.data.error);
                setResponseIcon(<FcHighPriority />);
            }

        })
        .catch((err) => {
            console.log("Error of reset password form submittion", err);
        })

    }

    return (

        <>

            {validUrl ?
                (<Grid container component="main" sx={{ height: "100%" }}>

                    <Grid item xs={false} sm={12} md={12} sx={{ backgroundColor: "#009270", backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", alignContent: "center" }} >

                            <Box style={{ textAlign: "center" }} sx={{ pb: 2, backgroundColor: "#fff", width: "34vw", borderRadius: "5px" }} justifyContent="center">

                                <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 2 }} style={{ fontFamily: "Monospace" }}>
                                    Reset Password
                                </Typography>

                                <Typography component="h1" variant="h6" sx={{ mt: 0, mb: 2 }} style={{ fontFamily: "Monospace", fontSize: "1rem" }}>
                                    {responseIcon}{"\t"}{response}
                                </Typography>

                                <Box sx={{ mb: 2 }}>
                                    <TextField id="outlined-basic 1" type="password" label="New Password" size="small" variant="outlined" sx={{ width: "30vw" }} onChange={(e) => { setPassword(e.target.value) }} />
                                </Box>

                                <Box>
                                    <TextField id="outlined-basic 2" type="password" label="Confirm New Password" size="small" variant="outlined" sx={{ width: "30vw" }} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                                </Box>

                                <Box>
                                    <Button variant="contained" sx={{ mt: 2, mb: 1 }} size="small" style={{ backgroundColor: "#009270", fontFamily: "Monospace", width: "30vw" }} onClick={handleResetPassword} >Submit</Button>
                                </Box>

                                <Box sx={{ textAlign: "right", mr: 3 }}>
                                    <Link href="/" underline="none" sx={{ fontFamily: "Monospace", fontWeight: "bolder" }}>Remember Password?</Link>
                                </Box>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>)
                :
                (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                        }}
                    >
                        <Container maxWidth="md">
                            <Grid container spacing={2}>
                                <Grid xs={6}>
                                    <Typography variant="h1">
                                        404
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        The page you’re looking for doesn’t exist.
                                    </Typography>
                                    <a href="/">
                                        <Button variant="contained">Back Home</Button>
                                    </a>
                                </Grid>
                                <Grid xs={6}>
                                    <img
                                        src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                                        alt="404 page not exist"
                                        width={500} height={250}
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                )
            }

        </>

    );

}

export default ResetPassword;