import { useState, React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu, Button } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { DeleteOutlineRounded, CloseRounded } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { dataItems } from './dataItems';
import Home from './Home';
import { HowToChoose } from './HowToChoose';
import { Footer } from './Footer';


function App() {
  const [shoes, setShoes] = useState(dataItems);
  const [order, setOrder] = useState([]);
  const [quantity, setQuantity] = useState(null);

  const mwFilter = (keyWord) => {
    if (keyWord !== '') {
      const newArray = dataItems.filter(el => el.filter === keyWord);
      setShoes(newArray);
    }
    else {
      setShoes(dataItems);
    }
  }

  const addToOrder = (el) => {
    let newItem = order;
    newItem.push(el);
    setOrder(newItem);
    el.show = !el.show;

    setQuantity(order.length);
  }

  const deleteItem = (id) => {
    const delItem = order.filter(item => item.id !== id)
    setOrder(delItem);
    setQuantity(order.length - 1);
  }

  const deleteAll = () => {
    setOrder([]);
    setQuantity(null);
  }

  const showOrderItems = () => {
    let total = order.reduce((a, b) => a + b.price, 0)

    return (
      <div>
        <div className='close-container'>
          <CloseRounded fontSize='small' onClick={handleMenuClose}/>
        </div>
        {order.map(elem => {
          const { id, image, title, price } = elem;

          return (
            // підслушка закриває корзину, потім можна замінити сторінкою з заказом
            <MenuItem key={ id } sx={{ display: 'flex' } }
            // onClick={handleMenuClose}
            >
              <img className='orderItem-img' src={ image } alt='Shoes' />
              <div className='orderItem-info'>
                  <h2>{ title }</h2>
                  <p>{ price } грн</p>
              </div>
                <DeleteOutlineRounded className='orderItem-del' fontSize="small" onClick={ () => deleteItem(id) }/>
          </MenuItem>
        )})}
        <div className='orderItem-total'>
          <ColorButton variant='outlined' sx={{ width: '100%', p: 0.25, fontSize: { xs: 11, md: 13 } }} onClick={ () => deleteAll() }>Удалить все</ColorButton>
          <p className="total">Итого: { total } грн</p>
        </div>
    </div>
    );
  }

  const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: 13,
      padding: '0 4px',
    },
  }));

  const StyledMenu = styled(Menu)(() => ({
      '& .MuiMenu-paper': {
      width: 285
      }
  }));

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    border: '1px solid grey',
    fontFamily: 'Poiret One, cursive',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: grey[100],
      border: '1px solid grey'
    },
  }));


  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

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
    <StyledMenu sx={{ mt: { xs: 0, md: 4 } }}
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
      {order.length > 0 ? showOrderItems() : <div className='close-container'>
                                              <CloseRounded fontSize='small' onClick={handleMenuClose}/>
                                              <p className='empty-cart'>Cart is empty</p>
                                            </div>
      }
    </StyledMenu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu sx={{ mt: 4 }}
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
                onClick={handleProfileMenuOpen}
      >
        {/* додавала атрибут showZero, але він не працював, тому задала стейту значення null */}
        <StyledBadge badgeContent={ quantity } onClick={handleMenuClose} color="error">
          <p onClick={handleMenuClose} className="nav-p">КОРЗИНА</p>
        </StyledBadge>
        
      </MenuItem>
      <MenuItem>
        <Link to="/howToChoose" className="mobile-link">
          <p onClick={handleMenuClose}>КАК ВЫБРАТЬ ИДЕАЛЬНУЮ ПАРУ</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <a onClick={handleMenuClose} className="mobile-link" href="#contacts">
          <p>КОНТАКТЫ</p>
        </a>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <div className="App">
        <Router>
          
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
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <IconButton size="large" color="inherit">
                    <Link to="/howToChoose" className="link">
                        <Typography sx={{ fontFamily: 'Poiret One, cursive' }}>
                          КАК ВЫБРАТЬ ИДЕАЛЬНУЮ ПАРУ
                        </Typography>
                    </Link>
                  </IconButton>
                  <IconButton size="large" color="inherit">
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
                    {/* додавала атрибут showZero, але він не працював, тому задала стейту значення null */}
                    <StyledBadge badgeContent={ quantity } color="error">
                        <ShoppingCartRoundedIcon />
                    </StyledBadge>
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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

          <Routes>
            <Route path="/" element={<Home dataState={ shoes } dataArray={ dataItems } mwFilter={ mwFilter } addToOrderFunc={ addToOrder } />}></Route>
            <Route path="/howtochoose" element={<HowToChoose />}></Route>
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  );
}
export default App;
