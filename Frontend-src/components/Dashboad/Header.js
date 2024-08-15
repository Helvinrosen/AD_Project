import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { LoginOutlined, ShoppingBag } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
import { useAuth } from './context/AuthContext'; // Import useAuth

export default function PrimarySearchAppBar() {
  const { isAuthenticated, logout } = useAuth(); // Use the auth state and logout function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isTopMenuOpen = Boolean(menuAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleTopMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleTopMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/prof' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>

      <MenuItem onClick={handleMenuClose} style={{fontFamily: "'Ubuntu', sans-serif" ,color:'black'}}>Profile</MenuItem>
</Link>
      {/* <MenuItem onClick={handleMenuClose} style={{fontFamily: "'Ubuntu', sans-serif" }}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          color="inherit"
        >
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Notifications</p>
      </MenuItem>
      <Link to='/studio' style={{color:'black',textDecoration:'none'}}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <ShoppingBag />
          </Badge>
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Studios</p>
      </MenuItem>
      </Link>
      <Link to='/prod' style={{color:'black',textDecoration:'none'}}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <ShoppingBag />
          </Badge>
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Equipments</p>
      </MenuItem>
      </Link>
     
      {!isAuthenticated ? (
        <Link to='/' style={{color:'black',textDecoration:'none'}}>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <LoginOutlined />
              </Badge>
            </IconButton>
            <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Login</p>
          </MenuItem>
        </Link>
      ) : (
        <Link to='/' style={{color:'black',textDecoration:'none'}}>
          
        <MenuItem onClick={() => { handleMenuClose(); logout(); }}>
          <IconButton
            size="large"
            aria-label="logout"
            color="inherit"
            >
            <Badge color="error">
              <Logout />
            </Badge>
          </IconButton>
          <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Logout</p>
        </MenuItem>
            </Link>
      )}
      <Link to='/prof' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          >
          <AccountCircle style={{color:'black'}} />
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" ,color:'black'}}>Profile</p>
      </MenuItem>
          </Link>
    </Menu>
  );

  const topMenuId = 'top-menu';
  const renderTopMenu = (
    <Menu
      anchorEl={menuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={topMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isTopMenuOpen}
      onClose={handleTopMenuClose}
    >
      <Link to='/cart' style={{textDecoration:'none',fontFamily: "'Ubuntu', sans-serif" ,color:'black'}}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="cart"
          color="black"
          >
          <ShoppingCartIcon style={{color:'black'}}/>
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Cart</p>
      </MenuItem>
      </Link>
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="favorites"
          color="inherit"
        >
          <FavoriteIcon />
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Favorites</p>
      </MenuItem> */}
      <Link to='/help' style={{textDecoration:'none',fontFamily: "'Ubuntu', sans-serif" ,color:'black'}}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="help"
          color="inherit"
        >
          <HelpIcon />
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Help</p>
      </MenuItem>
      </Link>
     
      <MenuItem>
        <IconButton
          size="large"
          aria-label="language selection"
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
        <p style={{marginTop:"1rem",fontFamily: "'Ubuntu', sans-serif" }}>Language</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleTopMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0.5 }}
          >
            <Stack direction="row" spacing={2}>
              <Link to='/home'>
                <Avatar alt="Remy Sharp" src={logo} />
              </Link>
            </Stack>
          </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontFamily: "'Ubuntu', sans-serif" // Use the imported font
              }}
            >
              HR STUDIO RENTAL
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button color="inherit">
                <Link to='/studio' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>
                  Studios
                </Link>
              </Button>
              <Button color="inherit">
                <Link to='/prod' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>
                  Equipments
                </Link>
              </Button>
             
              {!isAuthenticated ? (
                <Button color="inherit">
                  <Link to='/' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>
                    Login
                  </Link>
                </Button>
              ) : (
                <Button color="inherit" onClick={logout}>
                  <Link to='/' className='nav-link' style={{ color: 'white', textDecoration: 'none', textAlign: 'center' ,fontFamily: "'Ubuntu', sans-serif" }}>

                  Logout
                  </Link>
                </Button>
              )}
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
            </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderTopMenu}
    </Box>
  );
}
