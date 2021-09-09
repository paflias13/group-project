import styled from "styled-components"

const Container = styled.div`
  height: 60px;
  background-color: green;
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

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavBar = () => {
  return (
    <Container>d
      <Wrapper>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar