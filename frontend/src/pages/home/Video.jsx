import '../../index.css'
import styled from "styled-components"

const Video = () => {
    return (
        <SectionOne>
            <VideoPage autoPlay muted src="https://dob3qj4mreqzz.cloudfront.net/Chamisal-hero-video.comp.mp4"></VideoPage>
            <Image src="https://chamisalvineyards.com/wp-content/uploads/2018/08/home-mask-v2.png"></Image>
            <Wrapper>
                <Para>Our tasting room is open in accordance with state guidelines</Para>
                <Title>DISCOVER CHAMISAL</Title>
            </Wrapper>
            <Scroll>SCROLL</Scroll>
        </SectionOne>
    )
}

const SectionOne = styled.section`
    overflow: hidden;
    height: 90vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const VideoPage = styled.video`
    width: 100%;

`

const Para = styled.h3`
    color: var(--color-darkGreen);
    letter-spacing: 2px;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 500;
`

const Title = styled.h1`
    color: #404040;
    font-size: 51px;
    font-weight: 100;
    font-family: "RequiemV2",serif;
    letter-spacing: 3px;
`

const Scroll = styled.span`
    position: absolute;
    bottom: 145px;
    color: rgb(250, 250, 250);
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 5px;

    &::after{
        content: '';
        border: 1px solid #fff;
        height: 50px;
        position: absolute;
        bottom: -60px;
        right: 50%;
    }
`

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 140px;
`

const Image = styled.img`
    transform: translateY(3%);
    position: absolute;
    width: 100%;
    bottom: 0;
`

export default Video
