import React from "react";
import CommonForm from "./CommonForm";

const Login = () => {
  return (
    <>
      <CommonForm
        content={
          <>
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
          </>
        }
      />
    </>
  );
};

export default Login;
