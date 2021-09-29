import '../../index.css'
import styled from "styled-components"
import Button from '../../components/Button'

const SectionTwo = () => {
    return (
        <Container>
            <Images src="https://chamisalvineyards.com/wp-content/uploads/2018/08/home_wine_2_compressed.jpg" />
            <ImagesTwo src="https://chamisalvineyards.com/wp-content/uploads/2018/08/home_wine_1_compressed.jpg" />
            <Info>
                <Para>Vibrant, Complex & Intriguing</Para>
                <Title>CHAMISAL WINES</Title>
                <Text>We specialize in sustainably produced Chardonnay and Pinot Noir from Central Coast vineyards located between Monterey and Santa Barbara. Our wines are known for their intense flavor, mouthwatering texture, and impeccable balance. </Text>
                <Button value="DISCOVER"></Button>
            </Info>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 240px;
    position: relative;
`

const Para = styled.p`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
`

const Title = styled.h1`
    color: #404040;
    font-size: 55px;
    font-weight: 100;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
`

const Text = styled.p`
    width: 70%;
    line-height: 1.7;
    font-size: 16px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`

const Info = styled.div`
    flex: 1;
    text-align: left;
    margin-left: 100px;
`

const Images = styled.img`
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
    margin-left: 10px;
`

const ImagesTwo = styled.img`
    position: relative;
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
    bottom: 60px;

`

export default SectionTwo
