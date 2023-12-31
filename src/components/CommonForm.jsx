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

const CommonForm = ({ content }) => {
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
            {/*  */}
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              direction="column"
            >
              <img
                src="./images/logo.png"
                width={"160px"}
                alt="logo"
                style={{ marginBottom: "20px" }}
              />
              <Grid
                container
                justifyContent={"space-evenly"}
                alignItems={"center"}
                marginTop="20px"
                width={"80%"}
              >
                <img
                  src="./images/meeting-point.png"
                  width={"120px"}
                  alt="logo"
                />
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    padding: "5px",
                    borderRightWidth: "2px",
                    height: "40px",
                  }}
                />
                <img src="./images/yt.png" width={"160px"} alt="logo" />
              </Grid>
              {/*  */}
              {content}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CommonForm;
