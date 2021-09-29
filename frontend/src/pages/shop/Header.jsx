import React from 'react'
import styled from 'styled-components';
import Button from '../../components/Button';

const Header = () => {
    return (
        <Container>
            <Image />
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

const Image = styled.div`
    transform: matrix(1, 0, 0, 1, 0, 93);
    background-image: url("https://chamisalvineyards.com/wp-content/uploads/2018/08/shop_main_background.png");
    background-position: center bottom;
    width: 100%;
    height: 90vh;
`

const HeaderWrapper = styled.div`
    position: absolute;
    top: 150px;
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
    margin: 0 auto;
    background-color: #fff;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 6px #000;
    position: relative;
    top: -100px;
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
    color: rgba(0, 0, 0, 0.3);

    &:hover{
        color: rgba(0, 0, 0, 0.8);
    }
`

export default Header