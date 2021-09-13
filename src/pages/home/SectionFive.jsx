import '../../index.css'
import styled from "styled-components"
import Button from '../../components/Button'

const SectionFive = () => {
    return (
        <Container>
            <Info>
                <Para>About Chamisal </Para>
                <Title>OUR STORY</Title>
                <Text>A vibrant and passionate team. Amazing views in a natural setting. Truly remarkable wines. We are committed to delivering uniquely wonderful wine experiences. </Text>
                <Button value="LEARN MORE"></Button>
            </Info>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/08/home_footer.png" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    width: 30%;
    margin: 0 auto;
    line-height: 1.7;
    font-size: 16px;
    color: var(--color-para);
    opacity: 0.8;
    margin-bottom: 40px;
`

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
`

const Image = styled.img`
    width: 100%;
    vertical-align: middle;
    max-width: 100%;
`

export default SectionFive
