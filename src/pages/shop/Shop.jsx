import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import Wines from "./Wines";

const Shop = () => {
    return (
        <Container>
            <Header />
            <Section />
            <Wines />
            <SectionTwo />
        </Container>
    )
}

const Container = styled.div``

export default Shop
