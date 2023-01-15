import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu, cardClasses } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      // right: -3,
      top: 13,
    //   border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

// const StyledMenu = styled(Menu)(({ theme }) => ({
//     '& .MuiMenu-paper': {
//     backgroundColor: `${theme.palette.grey[400]}`,
//     top: 13,
//     //   border: `2px solid ${theme.palette.background.paper}`,
//     padding: '0 4px',
//     }
// }));

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(anchorEl)
    // props.basket();
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
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
      <MenuItem>
        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton> */}
        <Link to="/howToChoose" className="mobile-link">
        <p onClick={handleMenuClose}>Как выбрать идеальную пару</p>
        </Link>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
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
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <IconButton size="large" 
            // aria-label="show 4 new mails"
             color="inherit">
              {/* <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge> */}
                <Link to="/howToChoose" className="link">
                    <Typography sx={{ fontFamily: 'Poiret One, cursive' }}>
                    Как выбрать идеальную пару
                    </Typography>
                </Link>
            </IconButton>
            <IconButton size="large"
                        // aria-label="show 17 new notifications"
                        color="inherit"
            >
              {/* <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge> */}
                    <Typography sx={{ fontFamily: 'Poiret One, cursive' }}>
                      <a href="#contacts" className="link">
                        КОНТАКТЫ
                      </a>
                    </Typography>
            </IconButton>
            <IconButton size="large"
                        edge="end"
                      //   aria-label="account of current user"
                      // aria-label="order"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
            >
            <StyledBadge badgeContent={4} color="error" showZero>
                <ShoppingCartRoundedIcon />
            </StyledBadge>
              {/* <AccountCircle /> */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton size="large"
                      edge="end"
                      color="inherit"
                      // aria-label="open drawer"
                      aria-controls={mobileMenuId}
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      // sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
            {/* <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
    </>
  );
}






// export function Navbar() {
//     return (
//         <>

//         </>
//     );
// }
