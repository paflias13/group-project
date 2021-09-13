import '../../index.css'
import styled from "styled-components"
import Button from '../../components/Button'

const SectionThird = () => {
    return (
        <Container>
            <Para>Chamisal Vineyard </Para>
            <Title>OUR VINEYARD</Title>
            <Text>Chamisal Vineyards was the first to plant vineyards in the Edna Valley, and we have continued to produce vibrant, complex, and intriguing wines ever since. </Text>
            <Button value="LEARN MORE"></Button>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/06/home-content3.png" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 200px;
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
    color: var(--color-title);
    font-size: 55px;
    font-weight: 500;
    font-family: "Requiem",serif;
    letter-spacing: 3px;
    opacity: 0.9;
    margin-bottom: 20px;
`

const Text = styled.p`
    width: 30%;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 16px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`

const Image = styled.img`
    width: 100%;
`

export default SectionThird
