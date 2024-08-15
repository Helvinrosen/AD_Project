import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        p: 6,
        fontFamily: "'Ubuntu', sans-serif", // Apply the Ubuntu font
      }}
    >
      <Container maxWidth="lg" sx={{ color: 'white', backgroundColor: 'black' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }}>
              We are HR Service Rental company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }}>
              67th Main Street, Chennai
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }}>
              Email: HRSRinfo@example.com
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }}>
              Phone: +91 769 591 8390
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }} gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" sx={{ color: 'white', fontFamily: "'Ubuntu', sans-serif" }} align="center">
            {"Copyright © "}
            <Link color="inherit" style={{textDecoration:'none'}} href="https://www.linkedin.com/in/helvin-rosen-671112256" >
              HR STUDIO
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
