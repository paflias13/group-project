import '../../index.css'
import styled from "styled-components"
import Button from '../../components/Button'


const SectionOne = () => {
    return (
        <Container>
            <WrapperOne>
                <Para>Our Promise</Para>
                <Title>THIS IS CHAMISAL</Title>
                <Text>We are devoted to understanding this magical piece of ground and applying the knowledge and experience of several decades to produce quintessential Central Coast Chardonnays and Pinot Noirs using sustainable practices.</Text>
            </WrapperOne>
            <WrapperTwo>
                <Images src="https://chamisalvineyards.com/wp-content/uploads/2018/06/home_content1_image2.png" />
                <ImagesTwo src="https://chamisalvineyards.com/wp-content/uploads/2018/08/home_content1_image2.jpg" />
                <Info>
                    <Para>Where memories are made</Para>
                    <Title>VISIT US</Title>
                    <TextTwo>Our vineyard is located in a tranquil setting just 10 minutes from downtown San Luis Obispo in the beautiful Edna Valley. Come taste our sustainably produced Chardonnay and Pinot Noir straight from the source. </TextTwo>
                    <Button value="LEARN MORE" />
                </Info>
            </WrapperTwo>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 80px;
`

const WrapperOne = styled.div`
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
    width: 25%;
    margin: 0 auto;
    text-align: center;
    line-height: 1.7;
    font-size: 16px;
    color: var(--color-para);
    opacity: 0.8;
`

const TextTwo = styled.p`
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
    margin-left: 120px;

    &::after {
    content: url('https://chamisalvineyards.com/wp-content/uploads/2018/04/lines.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    top: 0;
}

`

const WrapperTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    position: relative;
`

const Images = styled.img`
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
    margin-right: 10px;
    position: relative;
    top: -60px;
`

const ImagesTwo = styled.img`
    width: 25%;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
`



export default SectionOne
