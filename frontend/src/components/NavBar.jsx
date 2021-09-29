import { ShoppingBasket, ShoppingCartOutlined, MenuOutlined, } from "@material-ui/icons"
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { CancelOutlined } from "@material-ui/icons";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Button } from "@material-ui/core";
import { Lines } from "./Lines";
import { Facebook } from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
import { Context } from "../context/Context";
import { useHistory } from "react-router";


export default function NavBar() {
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const { user, dispatch } = useContext(Context)
  const history = useHistory()

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const handleProfile = () => {
    return history.push('/profile')
  }

  // const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link className='link' to='/shop'>
            <ShoppingCartOutlined style={{ fontSize: '25px', color: '#000000' }} />
          </Link>
        </Left>
        <Center>
          <Link className='link' to='/'>
            <Logo>CHAMISAL</Logo>
            <LogoSmall>VINEYARDS</LogoSmall>
          </Link>
        </Center>
        <Right>
          <WrapperForUsername>
            {user ? (
              <User style={{ marginLeft: '10px' }}>HELLO &nbsp;
                <FirstNameUser onClick={handleProfile}>{user.firstName}</FirstNameUser>
              </User>)
              : (
                <Link className='link login' to="/login">LOGIN</Link>
              )}
            <Link className='link' to='/' onClick={handleLogout}>{user && "LOGOUT"}</Link>
          </WrapperForUsername>
          <WrapperSideBar>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuOutlined onClick={toggleDrawer(anchor, true)} />
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  <List style={{ position: "relative" }}>
                    <Lines />
                    <Toggle>
                      <Link onClick={toggleDrawer(anchor, false)} to='/shop'>
                        <Button><ShoppingCartOutlined style={ToggleStyles} /></Button>
                      </Link>
                      <CancelOutlined style={ToggleStyles} onClick={toggleDrawer(anchor, false)} />
                    </Toggle>
                    <ListItem className='logoNavBar'>
                      <LogoNav>CHAMISAL</LogoNav>
                      <LogoSmallNav>VINEYARDS</LogoSmallNav>
                    </ListItem>
                    <ListItem className="listItems">
                      <Link onClick={toggleDrawer(anchor, false)} to="/">HOME</Link>
                    </ListItem>
                    <ListItem className="listItems">
                      <Link onClick={toggleDrawer(anchor, false)} to="/shop">SHOP</Link>
                    </ListItem>
                    {user && (
                      <ListItem className="listItems">
                        <Link onClick={toggleDrawer(anchor, false)} to="/basket">BASKET</Link>
                      </ListItem>
                    )}
                    <ListItem className="listItems">
                      <Link onClick={toggleDrawer(anchor, false)} to="/about">ABOUT</Link>
                    </ListItem>
                    {!user && (
                      <>
                        <ListItem className="listItems">
                          <Link onClick={toggleDrawer(anchor, false)} to="/registration">REGISTRATION</Link>
                        </ListItem>
                      </>
                    )}
                    {
                      user?.role === 'admin' && (
                        <>
                          <ListItem className="listItems">
                            <Link onClick={toggleDrawer(anchor, false)} to="/add">ADD</Link>
                          </ListItem>
                          <ListItem className="listItems">
                            <Link onClick={toggleDrawer(anchor, false)} to="/history">HISTORY</Link>
                          </ListItem>
                        </>
                      )
                    }
                    <Social>
                      <Link to='https://www.facebook.com/Chamisal.Vineyards'>
                        <Facebook style={SocialIcons} />
                      </Link>
                      <Link to='https://www.instagram.com/chamisalvyd/'>
                        <Instagram style={SocialIcons} />
                      </Link>
                    </Social>
                  </List>
                </SwipeableDrawer>
              </React.Fragment>
            ))
            }
          </WrapperSideBar>
        </Right>
      </Wrapper>
    </Container>
  );
}

// const useStyles = makeStyles({
//   menuItem: {
//     background: "#A36833",
//   },
// })

const ToggleStyles = {
  cursor: "pointer",
  borderRadius: "50%",
  border: "2px solid #d4d0c3",
  color: "#d4d0c3",
  zIndex: "10",
  width: "35px",
  height: "35px",
  padding: "5px",
};

const SocialIcons = {
  cursor: "pointer",
  color: "#d4d0c3",
  opacity: "1",
  borderRadius: "50%",
  border: "2px solid #d4d0c3",
  width: "35px",
  height: "35px",
  zIndex: "10",
  padding: "6px",
  marginRight: "20px",
  marginLeft: "20px"
}

const Container = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  overflow-x: hidden;
`

const WrapperForUsername = styled.div`
  position: absolute;
  right: 0;
  width: 350px;
  font-weight: bold;
  letter-spacing: 1.5px;
  opacity: 0.7;
  font-size: 14px;
  font-family: "Brandon Grotesque",sans-serif;
  cursor: pointer;
`

const User = styled.span`
`
const FirstNameUser = styled.span`
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  padding-right: 10px;
  text-transform: uppercase;

  &:hover{
    color: #2c2a20;
  }

`

const WrapperSideBar = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
`

const Left = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 60%;
  border: 2.5px solid black;
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Shop = styled.div``;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Logo = styled.h1`
  font-family: "source_sans_proregular", sans-serif;
  color: #404040;
  font-weight: bold;
  letter-spacing: 0.2em;
  cursor: pointer;
`

const LogoNav = styled.h1`
  font-family: "source_sans_proregular", sans-serif;
  color: #d4d0c3;
  font-weight: bold;
  letter-spacing: 0.2em;
  cursor: pointer;
  font-size: 35px;
`

const LogoSmall = styled.h3`
  color: #808080;
  font-size: small;
  letter-spacing: 0.3em;
`

const LogoSmallNav = styled.h2`
  color: #d4d0c3;
  font-size: small;
  letter-spacing: 0.3em;
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`

const ListItemTitle = styled.div`

`

const Toggle = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`

const Social = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`