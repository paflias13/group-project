import { ShoppingBasket, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components"
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
  return (
    <Container>
      <Wrapper>
        <Left>
          <Shop>
            <ShoppingCart />
          </Shop>
          {/* <Link to={"/shop"}>shop</Link> */}
          <a href="/">home</a>
          <a href="/shop">shop</a>
          <a href="/login">login</a>
          <a href="/registration">registration</a>
          <a href="/add">add</a>
          <a href="/basket">basket</a>
        </Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
