import '../../index.css'
import styled from "styled-components"
import Video from './Video'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThird from './SectionThird'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

const Container = styled.div`
    
`

const Home = () => {
    return (
        <Container>
            <Video />
            <SectionOne />
            <SectionTwo />
            <SectionThird />
            <SectionFour />
            <SectionFive />
        </Container>
    )
}


export default Home