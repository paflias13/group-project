import React from 'react'
import styled from 'styled-components'

const Section = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Small Lot </Title>
                <Text>Our most exclusive wines showcasing unique areas of clones. </Text>
            </Wrapper>
            <Wrapper>
                <Title>Califa</Title>
                <Text>Meaning "prettiest one," representing the best barrels of a vintage. </Text>
            </Wrapper>
            <Wrapper>
                <Title>Estate </Title>
                <Text>Wines expressing the distictive Chamisal Spice of our Edna Valley vineyard. </Text>
            </Wrapper>
            <Wrapper>
                <Title>Stainless </Title>
                <Text>Produced without oak, allowing pure varietal characteristics to shine. </Text>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
`

const Wrapper = styled.div`
    margin-bottom: 150px;
    border-right: 1px solid #d4d0c3;
    padding: 30px;
    text-align: center;

    &:nth-child(4){
        border: none;
    }
`

const Title = styled.h2`
    padding-bottom: 15px;
    letter-spacing: 3.6px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    font-family: "Brandon Grotesque",sans-serif;
    color: var(--color-title);
`

const Text = styled.p`
    letter-spacing: 3px;
    font-size: 15px;
    font-family: "source_sans_proregular",sans-serif;
    color: #777570;
    line-height: 18px;
`

export default Section
