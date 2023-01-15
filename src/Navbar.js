import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      top: 13,
      padding: '0 4px',
    },
  }));

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <MenuItem aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}>
        <p onClick={handleMenuClose} className="nav-p">КОРЗИНА</p>
        </MenuItem>
      <MenuItem>
        <Link to="/howToChoose" className="mobile-link">
        <p onClick={handleMenuClose}>Как выбрать идеальную пару</p>
        </Link>
      </MenuItem>
      <MenuItem>
          <a onClick={handleMenuClose} className="mobile-link" href="index.html/#contacts">КОНТАКТЫ</a>
      </MenuItem>
      
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#212529' }}>
        <Toolbar>
        <Link to="/" className="link">
            <Typography variant="h6"
                        noWrap
                        component="div"
                        sx={{ fontFamily: 'Poiret One, cursive', fontSize: { xs: 14, sm: 20 } }}
            >
                JULIA TOPOLSKA
            </Typography>
            </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton size="large" 
             color="inherit">
                <Link to="/howToChoose" className="link">
                    <Typography sx={{ fontFamily: 'Poiret One, cursive' }}>
                    Как выбрать идеальную пару
                    </Typography>
                </Link>
            </IconButton>
            <IconButton size="large"
                        color="inherit"
            >
                <Typography sx={{ fontFamily: 'Poiret One, cursive' }}>
                  <a href="#contacts" className="link">
                    КОНТАКТЫ
                  </a>
                </Typography>
            </IconButton>
            <IconButton size="large"
                        edge="end"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
            >
            <StyledBadge badgeContent={4} color="error" showZero>
                <ShoppingCartRoundedIcon />
            </StyledBadge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton size="large"
                      edge="end"
                      color="inherit"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
    </>
  );
}
