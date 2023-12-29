import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const CommonForm = () => {
  return (
    <>
    {/* Main Container */}
      <Box
        sx={{
          backgroundImage: "url(./images/background.png)",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
            {/* Box */}
          <Box
            sx={{
              backgroundColor: "white",
              height: "480px",
              width: "400px",
              padding: "20px",
              border: "3px solid orange",
              borderRadius: "8px",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              direction='column'
            >
              <img
                src='./images/logo.png'
                width={"180px"}
                alt='logo'
                style={{ marginBottom: "20px" }}
              />
              <Grid
                container
                justifyContent={"space-evenly"}
                alignItems={"center"}
                marginTop='20px'
                width={"80%"}
              >
                <img
                  src='./images/meeting-point.png'
                  width={"120px"}
                  alt='logo'
                />
                <Divider
                  orientation='vertical'
                  variant='middle'
                  flexItem
                  sx={{
                    padding: "5px",
                    borderRightWidth: "2px",
                    height: "40px",
                  }}
                />
                <img src='./images/yt.png' width={"160px"} alt='logo' />
              </Grid>
                <Typography
                  textAlign={"center"}
                  fontWeight={"900"}
                  marginBottom={"20px"}
                  marginTop={"40px"}
                >
                  Sign in to access your account
                </Typography>
              <Box component='form' width='90%'>
                <Box sx={{ marginBottom: "15px" }}>
                  <TextField
                    fullWidth
                    hiddenLabel
                    required
                    id='outlined-required'
                    placeholder='Email'
                    size='small'
                  />
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  <TextField
                    fullWidth
                    hiddenLabel
                    required
                    id='outlined-required'
                    placeholder='Password'
                    size='small'
                    startAdornment={
                      <InputAdornment position='start'>
                        <RemoveRedEyeIcon />
                      </InputAdornment>
                    }
                  />
                </Box>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  marginTop='50px'
                >
                  <Typography variant='body2'>
                    <Link to='' style={{ textDecoration: "none" }}>
                      Forget Password ?
                    </Link>
                  </Typography>
                  <Button
                    variant='contained'
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "orange",
                      ":hover": {
                        backgroundColor: "orange",
                      },
                      color: "black",
                      textTransform: "capitalize",
                    }}
                  >
                    Sign in
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CommonForm;
