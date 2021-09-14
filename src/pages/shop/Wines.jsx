import Button from '../../components/Button'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007"

const Wines = () => {

    const [wines, setWines] = useState([])
    // const { search } = useLocation()


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(URL)
            console.log(res.data)
        }
        fetchData()
    }, [wines])


    return (
        <Container>
            {/* {wine.map(w => ( */}
            {/* <Wrapper key="">
                {console.log(w)}
                <Image src="" />
                <Title> </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper> */}
            {/* ))} */}
            <Link className="link" to="/product">
                <Wrapper>
                    <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                    <Title>Morrito Pinot Noir </Title>
                    <Info>edna valley 2018</Info>
                    <Button value="LEARN MORE" />
                </Wrapper>
            </Link>
            <Wrapper>
                <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                <Title>Morrito Pinot Noir </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper>
            <Wrapper>
                <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                <Title>Morrito Pinot Noir </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper>
            <Wrapper>
                <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                <Title>Morrito Pinot Noir </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper>
            <Wrapper>
                <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                <Title>Morrito Pinot Noir </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper>
            <Wrapper>
                <Image src='https://chamisalvineyards.com/wp-content/uploads/2018/06/CV-morrito-pinot-WP_705x214.png' />
                <Title>Morrito Pinot Noir </Title>
                <Info>edna valley 2018</Info>
                <Button value="LEARN MORE" />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
`

const Image = styled.img`
    width: 60%;

    transition: all 0.4s ease;

    &:hover {
        cursor: pointer;
        transform: translateY(-10px);
    }
`

const Title = styled.h2`
    margin-top: 40px;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0.8;
    font-family: 'Brandon Grotesque';
    word-wrap: break-word;
    font-weight: 600;
`

const Info = styled.h3`
    margin-top: 20px;
    font-family: 'Requiem';
    text-transform: capitalize;
    color: var(--color-brown);
    letter-spacing: 2px;
    font-weight: 100;
    margin-bottom: 20px;
`

export default Wines
