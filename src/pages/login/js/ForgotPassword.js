import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import axios from "axios";
import { FcHighPriority, FcOk } from "react-icons/fc";


function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [response, setResponse] = useState(null);
    const [responseIcon, setResponseIcon] = useState(null);

    const handleForgetPassword = () => {

        axios.post("/api/common/password", {
            email: email
        })
        .then((res) => {

            if (res.data.status) {
                setResponse(res.data.status);
                setResponseIcon(<FcOk />);
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }

            if (res.data.error) {
                setResponse(res.data.error)
                setResponseIcon(<FcHighPriority />);
            }

        })
        .catch((err) => {
            console.log("Error of forgot password", err);
        })

    };

    return (

        <>

        <Grid container component="main" sx={{ height: "100%" }}>

        <Grid item xs={false} sm={12} md={12} sx={{ backgroundColor: "#009270", backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}>

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", alignContent: "center" }} >

            <Box style={{ textAlign: "center" }} sx={{ pb: 2, backgroundColor: "#fff", width: "34vw", borderRadius: "5px" }} justifyContent="center">

                <Typography component="h1" variant="h5" sx={{ mt: 2, mb:2 }} style={{ fontFamily: "Monospace" }}>
                    Forgot Password
                </Typography>

                <Typography component="h1" variant="h6" sx={{ mt: 0, mb:2 }} style={{ fontFamily: "Monospace", fontSize: "1rem" }}>
                    {responseIcon}{"\t"}{response}
                </Typography>

                <Box>
                    <TextField id="outlined-basic" label="Enter email" size="small" variant="outlined" sx={{ width: "30vw" }} onChange={(e) => { setEmail(e.target.value) }} />
                </Box>

                <Box>
                    <Button variant="contained" sx={{ mt: 2, mb: 1 }} size="small" style={{ backgroundColor: "#009270", fontFamily: "Monospace", width: "30vw" }} onClick={handleForgetPassword} >Submit</Button>
                </Box>

                <Box sx={{ textAlign: "right", mr: 3 }}>
                    <Link href="/" underline="none" sx={{ fontFamily: "Monospace",  fontWeight: "bolder" }}>Remember Password?</Link>
                </Box>

            </Box>

          </Box>

        </Grid>

        </Grid>

        </>

    );

}

export default ForgotPassword;