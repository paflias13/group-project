import { ShoppingBasket, ShoppingCart } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Context } from "../context/Context";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../index.css'

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Shop = styled.div`
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavBar = () => {
  const { user, admin, dispatch } = useContext(Context)
  console.log(user)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Shop>
            <ShoppingCart />
          </Shop>
          {/* <Link to={"/shop"}>shop</Link> */}
          <Link to="/">home</Link>
          <Link to="/shop">shop</Link>
          <Link to='/' onClick={handleLogout}>{user && "LOGOUT"}</Link>
          {user ? (
            <span>HELLO {user.firstName}</span>
          ) : (
            <>
              <Link to="/login">login</Link>
              <Link to="/registration">registration</Link>
              <Link to="/add">add</Link>
            </>
          )}
          <Link to="/basket">basket</Link>
          <Link to="/about">about</Link>
        </Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar