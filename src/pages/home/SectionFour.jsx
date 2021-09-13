import '../../index.css'
import styled from "styled-components"

const SectionFour = () => {
    return (
        <Container>
            <Info>
                <Para>Join the </Para>
                <Title>CHAMISAL CLUB</Title>
                <Text>A wine club membership is the best way to enjoy our wide range of limited-production wines. Our three tiers offer an array of perks and discounts, plus the convenience of finding Chamisal wine at your door four times each year.</Text>
            </Info>
            <Wines>
                <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/06/mini-Premier-Tier_v2.jpg" />
                <InfoWines>
                    <InfoDesc>
                        <MiniTitle>PREMIER</MiniTitle>
                        <Desc> Chamisal fans rejoice: Our Premier Club offers FULL customization of our top tier wines for each shipment.</Desc>
                    </InfoDesc>
                    <InfoDesc>
                        <MiniTitle>RARE RELEASE</MiniTitle>
                        <Desc>Members of our Rare Release Club will receive our Estate and Califa tiers in addition to exclusive, small-lot bottlings.</Desc>
                    </InfoDesc>
                    <InfoDesc>
                        <MiniTitle>CLASSIC</MiniTitle>
                        <Desc>The Classic Club showcases our complete line-up of Estate-tier wines, as well as other unique releases.</Desc>
                    </InfoDesc>
                </InfoWines>
            </Wines>
        </Container>
    )
}

const Container = styled.div`
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin-top: 240px;
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
                `

const Image = styled.img`
    width: 50%;
    object-fit: contain;
    position: relative;
    left: -30px;
`

const Wines = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
`

const InfoWines = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const InfoDesc = styled.div`
    width: 60%;
    margin-bottom: 30px;
    border-bottom: 3px solid rgba(128, 128, 128, 0.596);
`

const MiniTitle = styled.h3`
    color: var(--color-para);
    font-size: 20px;
    margin-bottom: 40px;
    text-align: left;
    letter-spacing: 1px;
`

const Desc = styled.p`
    width: 90%;
    color: var(--color-para);
    font-family: "source_sans_proregular",sans-serif;;
    padding-bottom: 30px;
    text-align: left;
`

export default SectionFour
