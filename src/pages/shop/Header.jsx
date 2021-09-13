import React from 'react'
import styled from 'styled-components';
import Button from '../../components/Button';

const Header = () => {
    return (
        <Container>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/08/shop_main_background.png" />
            <HeaderWrapper>
                <Title>Shop Central Coast Wines</Title>
                <Para>Ground shipping is included on purchases of 12 bottles or more. Flat rate applies for AK, HI, NJ, OH & PR.</Para>
                <Para>Our winemaking philosophy is to capture what the vineyard gives us.
                    From mindful farming to careful handcrafting of the wines, we work
                    to highlight the natural beauty and the characteristics of each variety. </Para>
                <Button value="GIFTS & COLLECTIONS" />
            </HeaderWrapper>

            <Feelings>
                <Name>i'm feeling...</Name>
                <Select>
                    <Option disabled value=""></Option>
                    <Option value="">a bit of everything</Option>
                    <Option value="">bold & spicy</Option>
                    <Option value="">fun & flirty</Option>
                    <Option value="">crisp & fruity</Option>
                    <Option value="">cozy & warm</Option>
                </Select>
            </Feelings>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 100px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: fill;
    transform: matrix(1, 0, 0, 1, 0, 93);
`

const HeaderWrapper = styled.div`
    position: absolute;
    top: 200px;
    left: 100px;
`

const Title = styled.h1`
    color: #404040;
    font-size: 55px;
    font-weight: 100;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
    text-transform: uppercase;
`

const Para = styled.p`
    width: 40%;
    line-height: 1.7;
    font-size: 16px;
    color: var(--color-para);
    opacity: 0.8;
    /* padding-bottom: 40px; */

    &:nth-child(3) {
    margin-bottom: 25px;
    }
`

const Feelings = styled.div`
    width: 450px;
    height: 200px;
    background-color: #fff;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: -140px;
    left: 35%;
    box-shadow: 1px 1px 6px #000;
`

const Name = styled.label`
    margin-bottom: 20px;
    text-transform: uppercase;
    color: var(--color-title);
    font-size: 14px;
    letter-spacing: 3px;
    font-weight: 500;
    font-family: 'Brandon Grotesque';
`

const Select = styled.select`
    width: 300px;
    font-size: 25px;
    text-transform: uppercase;
    background-color: #fff;
    border: none;
    letter-spacing: 3px;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
    color: var(--color-title);
    text-align: center;
`

const Option = styled.option`
    background-color: aqua;
`

export default Header