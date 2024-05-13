import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" display="flex" color="text.secondary">
      {'Copyright©'}
      <Link style={{ marginRight: '2px' }} href="https://google.com/">Visionary_Partners&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box 
    sx={{ 
      
      backgroundColor: '#f5f5f5',
      padding: '20px', // Example padding
    }}>
    
    <Box
      sx={{ 

        width: "80%",
        display: 'flex',  marginTop: 0,  
        marginBottom: 0,  
        marginLeft: 'auto',  
        marginRight: 'auto',  
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 2, sm: 4 },
        textAlign: { sm: 'center', md: 'left' }, 
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
           

        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              {/* <img
            //    src={logoImg} 
                style={logoStyle}
                alt="logo of sitemark"
              /> */}
              {/* <h3 style={{color:"green"}}>Visionary_Partners</h3> */}
            </Box>
            <Box style={{ width: "100%", display: 'flex', justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: { xs: 'flex', sm: 'flex' },
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  Product
                </Typography>
                <Link color="text.secondary" href="#">
                  Delivery and conditions
                </Link>
                <Link color="text.secondary" href="#">
                  Shipping and return
                </Link>
                <Link color="text.secondary" href="#">
                  Features
                </Link>
                <Link color="text.secondary" href="#">
                  Testimonials
                </Link>
                <Link color="text.secondary" href="#">
                  Highlights
                </Link>
                <Link color="text.secondary" href="#">
                  Pricing
                </Link>
                <Link color="text.secondary" href="#">
                  FAQs
                </Link>
              </Box>
              <Box
                sx={{
                  display: { xs: 'column', sm: 'flex' },
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Company
                </Typography>
                <Link color="text.secondary" href="#">
                  About us
                </Link>
                <Link color="text.secondary" href="#">
                  Careers
                </Link>
                <Link color="text.secondary" href="#">
                  Our Mission
                </Link>
                <Link color="text.secondary" href="#">
                  Press
                </Link>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  Legal
                </Typography>
                <Link color="text.secondary" href="#">
                  Terms
                </Link>
                <Link color="text.secondary" href="#">
                  Privacy
                </Link>
                <Link color="text.secondary" href="#">
                  Contact
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ lg: 'row', xs: 'column', sm: 'column' }}
        justifyContent="space-evenly"
        mt={{ xs: 4, sm: 2 }}
        alignItems="center"
      >
        <Box sx={{ width: { lg: "45%", xs: '100%', sm: 'auto' } }}>
          <Typography variant="body2" color="text.secondary" fontSize="20px" mb={2.2}>
            SUBSCRIBE TO THE NEWSLETTER.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="center">
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
              }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Stack>
        </Box>
        <Box sx={{ width: { lg: '25%', xs: '100%', sm: 'auto' }, display: "flex", alignItems: { lg: "flex-end", md: "flex-end", xs: 'center', sm: 'center' }, textAlign: 'center', mt: { xs: 4, sm: 2 }, ml: { xs: 2, sm: 'auto' } }}>
          <Stack alignItems="center" display='flex' justifyContent='space-between' flexDirection='row' gap="5" sx={{ color: 'text.secondary' }}>
            <IconButton color="inherit" href="https://facebook.com" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com/MaterialUI" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/company/mui/" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center" mt={{ xl: '6%', lg: '6%', xm: '5%', sm: '5%' }}>
        <Box textAlign="center" display='flex' alignItems='center' flexWrap='wrap' width={{ xl: '60%', lg: '100%', xm: '98%', sm: '98%' }}>
          <Copyright />
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Visionary Partners
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link style={{ marginLeft: '8px' }} color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link style={{ marginLeft: '8px' }} color="text.secondary" href="#">
            Contact
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link style={{ marginLeft: '8px' }} color="text.secondary" href="#">
            Legal notice
          </Link>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}