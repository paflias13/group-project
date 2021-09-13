import Button from '../../components/Button'
import styled from 'styled-components'

const SectionTwo = () => {
    return (
        <Container>
            <Wrapper>
                <Para>join the</Para>
                <Title>chamisal club</Title>
                <Button value="LEARN MORE" />
            </Wrapper>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/07/mini-shop-footer-background_v3.png" />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`

const Image = styled.img`
    width: 100%;
    vertical-align: middle;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    position: relative;
    top: 100px;
`

const Para = styled.p`
    color: var(--color-darkGreen);
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 2px;
`

const Title = styled.h1`
    color: var(--color-title);
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 500;
    font-family: "Requiem",serif;
    margin-bottom: 20px;
`

export default SectionTwo
